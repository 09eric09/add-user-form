import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = () => {

    const addUserhandler = (e) => {
        e.preventDefault();

    }

  return (
    <Card className={classes.input}>
    <form onSubmit={addUserhandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" />
        <Button type="submit">Add User</Button>
    </form>
    </Card>
  )
}

export default AddUser;