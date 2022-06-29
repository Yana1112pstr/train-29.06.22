import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({ createPost }) => {

    const [post, setPost] = useState({ name: "", description: "" });

    const toAddNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        createPost(newPost);
        setPost({ name: "", description: "" })
    }

    return (
        <form>
            <MyInput type="text" placeholder="name" value={post.name}
                onChange={e => setPost({ ...post, name: e.target.value })} />
            <MyInput type="text" placeholder="description"
                value={post.description}
                onChange={e => setPost({ ...post, description: e.target.value })}
            />
            <MyButton onClick={toAddNewPost}>Create post</MyButton>
        </form>
    );
};

export default PostForm;