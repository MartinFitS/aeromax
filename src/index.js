import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, compose} from "redux";
import reducer from "./reducers";
import App from "./routes/App";
import "./assets/styles/App.css";

const initialState = {
  "search":[],
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const store = createStore(reducer,initialState,composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
        <App/>
  </Provider>
    ,
  document.getElementById('root')
);


