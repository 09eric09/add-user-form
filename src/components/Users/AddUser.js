import React, {useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = () => {

  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

    const userNameHandler = (e) => {
      setUsername(e.target.value);
    }

    const ageHandler = (e) => {
      setAge(e.target.value);
    }

    const addUserhandler = (e) => {
      e.preventDefault();
      console.log(username, age);
  }

  return (
    <Card className={classes.input}>
    <form onSubmit={addUserhandler}>
        <label htmlFor="username">Username</label>
        <input onChange={userNameHandler} type="text" id="username" />
        <label htmlFor="age">Age</label>
        <input onChange={ageHandler} type="number" id="age" />
        <Button type="submit">Add User</Button>
    </form>
    </Card>
  )
}

export default AddUser;