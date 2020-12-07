import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./index.module.css"

const MenuItem = (props) => {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" exact activeClassName={style.active} to={props.to}>{props.name}</NavLink>
        </li>
    );
}

export default MenuItem;

