import React from 'react';
import classes from './Modal.module.css';

const Modal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.closeModal} />
      <div className={classes.modal}>
        {props.children}
        <button className={classes.closeButton} onClick={props.closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
