import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MoonLoader from "react-spinners/MoonLoader";
import { useSelector } from 'react-redux';
import useApiCall from '../../hooks/useApiCall';

import { fetchPostsStart } from "../../redux/posts/actions";
import {
  selectIsPostFetching,
  selectPostsItems,
} from "../../redux/posts/selectors";

const Posts = () => {
  const { posts, isLoading } = useSelector(state => state.posts);
  const callApi = useApiCall();
  // console.log(posts);
  // ─── SIDEEFFECTS ────────────────────────────────────────────────────────────────
  useEffect(() => {
    callApi('post', 'get');
  }, [fetchPostsStart]);

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
            {isLoading && <MoonLoader />}
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
