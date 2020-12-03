import React from 'react';
import style from './index.module.css'

const Header = () => {
    return(
        <header>
            <div className="container">
                <div className="col d-flex justify-content-start pt-2 pb-2">
                    <div className={style.logo}></div>
                </div>
            </div>
        </header>
    );
}

export default Header;