import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MoonLoader from "react-spinners/MoonLoader";
import { useSelector } from 'react-redux';
import useApiCall from '../../hooks/useApiCall';

const Posts = () => {
  const state = useSelector(state => state);
  console.log('State => ', state); 
  const callApi = useApiCall();
  const isFetching = false;
  const posts = [];
  // console.log(posts);
  // ─── SIDEEFFECTS ────────────────────────────────────────────────────────────────
  useEffect(() => {
    callApi('post', 'get');
  }, []);

  // ─── VIEW ───────────────────────────────────────────────────────────────────────
  return (
    <div className="container">
      <header className="header">
        <h4>
          <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a>/
          <a href="https://jsonplaceholder.typicode.com/posts">posts</a>
        </h4>
      </header>
      <div className="content">
        <nav className="sidebar"></nav>
        <main className="view">
          <div className="detail">
            {isFetching && <MoonLoader />}
            <ul>
              {posts.map((post) => {
                return <li key={post.id}>{post.title}</li>;
              })}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Posts;
