import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import reducerOrders from './reducer_orders'
import ThunkMiddleware from 'redux-thunk'
const rootReducer = combineReducers({
  orders: reducerOrders
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(ThunkMiddleware)
))
export default store
window.__store__ = store
