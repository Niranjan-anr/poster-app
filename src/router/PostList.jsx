import React from 'react';
import { useLoaderData } from 'react-router-dom';
import classes from './PostsList.module.css';
import Post from '../components/post';

const PostList = () => {
  const posts = useLoaderData();
  console.log(posts, 'postList');

  if (!posts || posts.length === 0) {
    console.log('post list executed');
    return <div>No posts found.</div>;
  }

  return (
    <div>
      <ul className={classes.Post}>
        {posts.map((post, index) => (
          <Post key={index} author={post.Name} name={post.Text} />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
