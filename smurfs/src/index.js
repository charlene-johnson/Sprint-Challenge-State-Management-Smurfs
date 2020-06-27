import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import {smurfReducer} from './reducers/reducer';
import thunk from 'redux-thunk';

const logger = ({getState}) => next => action => {
    console.log("Dispatching action", action);
};

let store = createStore(smurfReducer, applyMiddleware(logger, thunk));



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
