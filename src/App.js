import React, { useMemo, useState } from "react";
import Counter from "./components/Counter";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/modal/MyModal";
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, name: 'Yana', description: '1webDev' },
    { id: 2, name: 'Roma', description: '2webDev' },
    { id: 3, name: 'Artem', description: '3webDev' },
    { id: 4, name: 'Leon', description: '4webDev' },
  ]);

  const [filter, setFilter] = useState({sort:"", query:""})

  const [visible, setVisible] = useState(false);

  const sortedPosts = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.name.toLowerCase().includes(filter.query));
  }, [filter.query, sortedPosts]);

  const toCreatePost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  }

  const toRemovePost = (post) => {
    setPosts(posts.filter(p => (p.id !== post.id)))
  }

  return (
    <div className="App">
      <MyButton type="button" onClick={() => setVisible(true)}>Create post</MyButton>
      <MyModal visible={visible} setVisible={setVisible}>
        <PostForm createPost={toCreatePost} />
      </MyModal>
      <hr style={{ margin: '10px 0' }} />
      <div>
        <PostFilter filter={filter} setFilter={setFilter}/>
      </div>
      {sortedAndSearchedPosts.length
        ? <PostList remove={toRemovePost} posts={sortedAndSearchedPosts} title='List 1' />
        : <h1 style={{ textAlign: 'center' }}>
          Posts not found
        </h1>
      }
      <Counter />
    </div>
  );
}

export default App;