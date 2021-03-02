import React from 'react';
import style from './index.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return(
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-6 d-flex justify-content-start pt-2 pb-2">
                        <div className={style.logo}></div>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-end pt-2 pb-2">
                        {props.isAuth ? <div>{props.login}</div> : <NavLink to={'/login'} >Login</NavLink>}

                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;