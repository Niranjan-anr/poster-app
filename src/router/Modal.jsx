import React from 'react';
import classes from './Modal.module.css';
import { Link,  useNavigate } from 'react-router-dom';

const Modal = (props) => {
  const Navigator=useNavigate()
  const onCloseHandler=()=>{
   Navigator('/')
  }
  return (
    <div>
      <div className={classes.backdrop} onClick={onCloseHandler} />
      <div className={classes.modal}>
        {props.children}
        <Link to='/' className={classes.closeButton}>
          Close
        </Link>
      </div>
    </div>
  );
};

export default Modal;
