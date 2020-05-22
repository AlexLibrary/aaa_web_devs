import API from '../api/API'

/* ActionConstant */
const SET_ORDERS = 'SET_ORDERS'
const SET_LOADING = 'SET_LOADING'
/* initState for Reducer */
const initialState = {
  orders: [],
  totalCount: 0,
  isLoading: false,
  initialized: false,
}
/* Reducer */
const reducerOrders = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        orders: action.orders,
        totalCount: action.totalCount,
        initialized: true
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    default:
      return state;
  }
}
/* ActionCreators */
export const setOrders = (orders, totalCount) => ({
  type: SET_ORDERS, orders, totalCount
})
export const setLoading = (isLoading) => ({
  type: SET_LOADING, isLoading
})

/* ThunkCreators */
export const requestOrders = (page, pageSize) => async (dispatch) => {
  dispatch(setLoading(true))
  const { data, totalData } = await API.getOrders(page, pageSize)
  console.log(data);
  dispatch(setOrders(data, totalData))
  dispatch(setLoading(false))
}
/* end */
export default reducerOrders
