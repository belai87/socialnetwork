import React from 'react';
import {updateNewPostActionCreator, addPostActionCreator} from "../../redux/profile-reduser";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) =>{
    return{
        posts: state.profile.posts,
        newPost: state.profile.newPost
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        addPost: (text) => {
            dispatch(addPostActionCreator(text));
        }
    }
}

const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostsContainer;

