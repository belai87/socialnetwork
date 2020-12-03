import React from 'react';
import style from './index.module.css'
import banner from "../../../img/banner.jpg";

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={style.banner}>
                <img src={banner} alt="" />
            </div>
            <div className="info d-flex align-items-center mt-4">
                <div className={`${style.user} mr-4`}></div>
                <div className="">
                    <h4>{props.info.name}</h4>
                    <div>{props.info.date}</div>
                    <div>{props.info.city}</div>
                    <div>{props.info.education}</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;

