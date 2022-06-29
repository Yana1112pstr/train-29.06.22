import React from 'react';
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {title}
            </h1>
            <ul>
                {posts.map((post, index) =>
                    <PostItem remove={remove} number={index + 1} props={post} key={post.id} />
                )}
            </ul>
        </div>
    );
};

export default PostList;