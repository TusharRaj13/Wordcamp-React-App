import React from "react";
import ReactDOM from "react-dom"
import App from "./src/App"
import "./index.css"
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/reducers'

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>, 
document.getElementById("root"))