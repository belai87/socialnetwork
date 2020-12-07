import React from 'react';
import Posts from "../Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className="col">
            <ProfileInfo info={props.state.info}/>
            <Posts state={props.state}/>
        </div>
    );
}

export default Profile;

