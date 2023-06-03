import React, { useEffect, useState } from 'react';
import classes from './PostsList.module.css';
import Post from './post';
import NewPost from './NewPost';
import Modal from './Modal';
import MainHeader from './MainHeader';

const PostList = () => {
  const [data, setData] = useState([]);
  const [isCreatingPost, setIsCreatingPost] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('http://localhost:8080/posts');
        const data = await response.json();
        setData(data.posts);
      } catch (error) {
        console.error('Error fetching post list:', error);
      }
    }
    fetchPosts();
  }, []);

  const newPostHandler = async (newFormData) => {
    await fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFormData),
    });
    setData((prevData) => [newFormData, ...prevData]);
    setIsCreatingPost(false); // Close the form after submitting
  };

  const handleCreatePost = () => {
    setIsCreatingPost(true); // Show the form when "New Post" button is clicked
  };

  const closeModal = () => {
    setIsCreatingPost(false); // Close the form when backdrop or close button is clicked
  };

  return (
    <div>
      <MainHeader onCreatePost={handleCreatePost} />
      <ul className={classes.Post}>
        {data.map((value, index) => {
          return <Post key={index} author={value.Text} name={value.Name} />;
        })}
      </ul>
      {isCreatingPost && (
        <Modal closeModal={closeModal}>
          <NewPost newPost={newPostHandler} closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default PostList;
