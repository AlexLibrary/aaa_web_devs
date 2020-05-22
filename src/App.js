import React from 'react';
import './App.scss';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux_store";
import Table from './components/Table/Table';
import Form from './components/Form/Form';

const App = (props) => {
  // if (!props.initialized) {
  //   props.requestUsers()
  //   return <div>Loading...</div>
  // }
  return (
    <div className="container">
      <div className="App">
        <Table />
        {/* <Form /> */}
      </div>
    </div>
  );
}

const MainApp = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL} >
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)

export default MainApp;
