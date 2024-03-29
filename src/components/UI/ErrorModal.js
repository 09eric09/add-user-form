import React, {useState} from 'react';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <>
    <div className={classes.backdrop} onClick={props.removeModal}/>
    <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.removeModal}>Okay</Button>
        </footer>
    </Card>
    </>
  )
}

export default ErrorModal;