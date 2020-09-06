import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Home';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import PostDetail from './components/PostDetail';
import Footer from './components/Home';

function App() {
  // Store the data
  const [posts, setPosts] = useState([]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/home">
          <Home posts={posts} setPosts={setPosts}/>
        </Route>
        {/* <Route exact path="/">
          <Home />
        </Route> */}
        <Route path="/post/:postId">
          <PostDetail />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
