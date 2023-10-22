import React, { useEffect, useState } from 'react';
import "./RedditPosts.css"

const RedditPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/reactjs.json')
      .then((response) => response.json())
      .then((data) => {
        const postArray = data.data.children;
        setPosts(postArray);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container my-4">
      <div className="row">
        {posts.map((post, index) => (
          <div className="col-md-6" key={index}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{post.data.title}</h5>
                <p
                  className="card-text"
                  dangerouslySetInnerHTML={{ __html: post.data.selftext_html }}
                />
                <a
                  href={post.data.url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </a>
                <p className="card-text">Score: {post.data.score}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RedditPosts;
