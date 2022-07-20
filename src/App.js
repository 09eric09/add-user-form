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
    <div>
      <AddUser sendUsers={getUsers}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
