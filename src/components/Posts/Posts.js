import React from 'react';
import PostItem from "./PostsItem/PostItem";

const Posts = (props) => {
    let posts = props.post.map(el => <PostItem key={el.id} message={el.post}/>);
    return (
        <div className="col mt-4">
            <h4>Posts</h4>
            <div className="mt-4">
                <form>
                    <div className="form-group">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter text..."></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="button" className="btn btn-primary">Send</button>
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

