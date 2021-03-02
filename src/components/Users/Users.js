import React from "react";
import UserItem from "./UserItem/UserItem";
import Pagenation from "./Pagenation/Pagenation";
import s from './index.module.css';


const Users = (props) => {

    let pagesCount = Math.ceil(props.users.pageTotal / props.users.pageCount);
    let pages = [];

    for(let i = 1; i <= pagesCount; i++ ){
        pages.push(i);
    }

    return(
        <div>
            <div className="d-flex flex-wrap mb-4">
                {pages.map(elem => <div className={props.users.pageNumber === elem ? s.pagenation_item__active : s.pagenation_item}  key={elem} onClick={() => {props.onClickPagination(elem)}}>{elem}</div>)}
            </div>
            <div className='d-flex flex-column'>
                <div className="mb-4">{
                    props.users.users.map((elem) => <UserItem
                        key={elem.id}
                        id={elem.id}
                        name={elem.name}
                        status={elem.status}
                        location={elem.location}
                        follow={elem.followed}
                        photo={elem.photos.small}
                        followingInProgress={props.followingInProgress}
                        onFollow={props.follow}
                        onUnFollow={props.unfollow}
                    />)
                }</div>
                <button onClick={props.showMoreUsers}>show more users</button>
            </div>
        </div>
    )
}

export default Users;