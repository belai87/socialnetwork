import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "../Posts/PostsContainer";

const Profile = (props) => {

    return (
        <div className="col">
            <ProfileInfo info={props.state.info} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <PostsContainer state={props.state} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;

