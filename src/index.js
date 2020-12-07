import 'bootstrap/dist/css/bootstrap.css';
import state, {subscribe} from './redux/state'
import ReactDOM from "react-dom";
import App from "./App";
import React from 'react';


const rerenderEntireTree = (state) =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);


