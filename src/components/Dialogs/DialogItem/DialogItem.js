import React from 'react';
import style from "./index.module.css"
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {
    return(
        <div className={`${style.dialog_item} mt-4`}>
            <NavLink exact to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
}

export default DialogsItem;