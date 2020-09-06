import React, { useState, createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import PostDetail from './components/PostDetail';
import Footer from './components/Home';

export const PostContext = createContext();

function App() {
  // Store the data
  const [posts, setPosts] = useState([]);

  return (
    <Router>
      <Header />
      {/* <PostContext.Provider value={[posts, setPosts]}> */}
        <Switch>
          <Route exact path="/home">
            <Home posts={posts} setPosts={setPosts} />
          </Route>
          <Route exact path="/">
            <Home posts={posts} setPosts={setPosts} />
          </Route>
          <Route path="/post/:postId">
            <PostDetail />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      {/* </PostContext.Provider> */}
      <Footer />
    </Router>
  );
}

export default App;
