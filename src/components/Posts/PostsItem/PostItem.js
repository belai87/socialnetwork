import React from 'react';
import style from "./index.module.css";

const PostItem = (props) => {
    return(
        <div className="post_item d-flex align-items-center mb-4">
            <div className={`${style.post_img} mr-4`}></div>
            <div className="post_text">{props.message}</div>
        </div>
    );
}

export default PostItem;