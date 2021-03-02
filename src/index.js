import 'bootstrap/dist/css/bootstrap.css';
import store from './redux/redux'
import ReactDOM from "react-dom";
import App from "./App";
import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);




