import React from "react";
import {NavLink} from "react-router-dom";
import noImg from '../../../img/user.png';

const UserItem = (props) => {

    const onFollowStatus = (statusFollow) => {
        if(statusFollow){
            props.onUnFollow(props.id);
        }else{
            props.onFollow(props.id);
        }
    }

    return(
        <div className='row'>
            <div className="col-2 d-flex flex-column">
                <div className="rounded-circle mb-4">
                    <NavLink to={'/profile/' + props.id}>
                        <img src={props.photo === null ?  noImg :  props.photo} alt={props.name}/>
                    </NavLink>
                </div>
                <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => onFollowStatus(props.follow)}>{props.follow ? 'follow' : 'unfollow'}</button>
            </div>
            <div className="col-10 row">
                <div className='col-6'>
                    <div className="">{props.name}</div>
                    <div className="">{props.status}</div>
                </div>
                <div className='col-6'>
                    <div className="">{props.location !== undefined ? props.location.country : ''}</div>
                    <div className="">{props.location !== undefined ? props.location.city: ''}</div>
                </div>
            </div>
        </div>
    )
}

export default UserItem;