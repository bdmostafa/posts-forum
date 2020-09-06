import React, { useEffect } from 'react';
import Posts from './Posts';

const Home = ({ posts, setPosts }) => {

    // Fetch the data
  const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.log(err))
  }

  // useEffect hook executes when page is loaded
  useEffect(loadData, [])

    return (
        <div>
            {
                posts && posts.map(post => <Posts key={post.id} post={post}></Posts>)
            }
        </div>
    );
};

export default Home;