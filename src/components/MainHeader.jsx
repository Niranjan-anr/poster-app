import React from 'react';
import { MdPostAdd, MdMessage } from 'react-icons/md';
import classes from './MainHeader.module.css';
import { Link } from 'react-router-dom';

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        Niranjan's Poster
      </h1>
      <p>
        <Link to="/NewPost"  className={classes.button} >
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
