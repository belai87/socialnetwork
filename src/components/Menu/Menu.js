import React from 'react';
import {Link, NavLink} from "react-router-dom";
import style from "./index.module.css"

const Menu = (props) => {
    return (
        <div className="col-2">
            <nav>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact activeClassName={style.active} to="/profile">Profile</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact activeClassName={style.active} to="/dialogs">Message</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact activeClassName={style.active} to="/news">News</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact activeClassName={style.active} to="/music">Music</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact activeClassName={style.active} to="/setting">Setting</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;

