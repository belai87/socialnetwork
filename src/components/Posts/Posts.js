import React from 'react';
import PostItem from "./PostsItem/PostItem";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../FormsControl/Control";


const maxLength = maxLengthCreator(10);

const SendPost = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <Field validate={[required, maxLength]}  value={props.newPost} placeholder="Enter text..." name="POST" component={Textarea}/>
            </div>
            <div className="d-flex justify-content-end">
                <button className="btn btn-primary">Send</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({form: 'post'})(SendPost);

const Posts = (props) => {

    let posts = props.posts.map(el => <PostItem key={el.id} message={el.post}/>);

    const onSubmit = (values) => {
        props.addPost(values.POST);
    }

    return (
        <div className="col mt-4">
            <h4>Posts</h4>
            <div className="mt-4">
                <PostReduxForm onSubmit={onSubmit} {...props}/>
            </div>
            <div className="mt-4">
                <div className="post-list pt-4">
                    {posts}
                </div>
            </div>
        </div>
    );
}

export default Posts;


/*
<Field  ref={newPostElement} value={props.newPost} onChange={updateNewPost} className="form-control" rows="3" placeholder="Enter text..." name="notes" component="textarea"/>
<button type="button" onClick={props.addPost} className="btn btn-primary">Send</button>*/
