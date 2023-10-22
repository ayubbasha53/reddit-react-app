import React from 'react';
import RedditPosts from './RedditPosts';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            Reddit ReactJS Posts
          </a>
        </div>
      </nav>

      <RedditPosts />
    </div>
  );
}

export default App;
