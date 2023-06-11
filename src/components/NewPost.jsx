import React from 'react';
import Modal from '../router/Modal';
import { Form } from 'react-router-dom'
import { redirect } from 'next/dist/server/api-utils';
import classes from './NewPost.module.css'

function NewPost(props) {
  return (
    <Modal>
      <Form className={classes.form} action='/' method="POST">
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="Text" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="Name" required />
        </p>
        <button type="submit">Ok</button>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const submittedData = Object.fromEntries(formData);

      await fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submittedData),
    });
    return redirect('/');
}
