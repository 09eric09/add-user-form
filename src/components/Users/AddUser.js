import React, {useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {

  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState(); 

    const userNameHandler = (e) => {
      setUsername(e.target.value);
    }

    const ageHandler = (e) => {
      setAge(e.target.value);
    }

    const resetError = () => {
      setError(null);
    }

    const addUserhandler = (e) => {
      e.preventDefault();
      if (username.trim().length === 0 || age.trim().length === 0) {
        setError({
          title: "Invalid input", 
          message: "Please enter something"
        });
        return;
      }

      if (+age < 1) {
        setError({
          title: "Invalid input", 
          message: "Please enter a valid age"
        });
        return;
      }

      let inputData = {
        username: username, 
        age: age, 
        key: Math.random().toString()
      }

      props.sendUsers(inputData);
      setUsername('');
      setAge('');
  }

  return (
    <>
    {error && <ErrorModal removeModal={resetError} title={error.title} message={error.message}/>}
    <Card className={classes.input}>
    <form onSubmit={addUserhandler}>
        <label htmlFor="username">Username</label>
        <input onChange={userNameHandler} value={username} type="text" id="username" />
        <label htmlFor="age">Age</label>
        <input onChange={ageHandler} value={age} type="number" id="age" />
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    </>
  )
}

export default AddUser;