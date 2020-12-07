import React from 'react';
import PostItem from "./PostsItem/PostItem";

const Posts = (props) => {
    let posts = props.state.posts.map(el => <PostItem key={el.id} message={el.post}/>);
    let newPostElement = React.createRef();

    let addPost = () =>{
        props.state.addPost();
        newPostElement.current.value = '';
    }

    let onChangeArea = () => {
        let text = newPostElement.current.value;
        props.state.newPost = text;
    }

    return (
        <div className="col mt-4">
            <h4>Posts</h4>
            <div className="mt-4">
                <form>
                    <div className="form-group">
                        <textarea ref={newPostElement} onChange={onChangeArea} className="form-control" rows="3" placeholder="Enter text..."></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="button" onClick={addPost} className="btn btn-primary">Send</button>
                    </div>
                </form>
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

