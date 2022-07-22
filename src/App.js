import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [users, setUsers] = useState([]);
  const getUsers = (userData) => {
    setUsers((previousUsers) => {
      return [userData, ...previousUsers];
    });
  }

  return (
    <>
      <AddUser sendUsers={getUsers}/>
      <UsersList users={users}/>
    </>
  );
}

export default App;
