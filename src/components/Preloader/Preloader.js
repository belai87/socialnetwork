import React from "react";
import s from './index.module.css'

const Preloader = (props) => {
    return (
        <div className={s.preloader}>
            <div className={s.preloaderWrapper}>
                <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />
            </div>
        </div>
    )
}

export default Preloader;