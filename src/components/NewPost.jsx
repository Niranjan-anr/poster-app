import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost(props) {
  const [text, setText] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.newPost({ Name: name, Text: text });

    // Reset the input values
    setText('');
    setName('');
  };

  const onNameChangeHandler = (event) => {
    let value = event.target.value;
    setName(value);
  };

  const onChangeHandler = (event) => {
    let value = event.target.value;
    setText(value);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onChangeHandler} value={text} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" onChange={onNameChangeHandler} required value={name} />
      </p>
      <button type="submit">Ok</button>
    </form>
  );
}

export default NewPost;
