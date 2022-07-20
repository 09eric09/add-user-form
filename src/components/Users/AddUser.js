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
      if (username.trim().length === 0 || age.trim().length === 0) {
        return;
      }

      if (+age < 1) {
        return;
      }

      console.log(username, age);
      setUsername('');
      setAge('');
  }

  return (
    <Card className={classes.input}>
    <form onSubmit={addUserhandler}>
        <label htmlFor="username">Username</label>
        <input onChange={userNameHandler} value={username} type="text" id="username" />
        <label htmlFor="age">Age</label>
        <input onChange={ageHandler} value={age} type="number" id="age" />
        <Button type="submit">Add User</Button>
    </form>
    </Card>
  )
}

export default AddUser;