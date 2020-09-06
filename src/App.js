import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  // Store the data
  const [posts, setposts] = useState([]);

  // Fetch the data
  const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setposts(data))
  }

  // useEffect hook executes when page is loaded
  useEffect(loadData, [])

  return (
    <div className="App">
      {posts && posts.map(post => post.title)}
    </div>
  );
}

export default App;
