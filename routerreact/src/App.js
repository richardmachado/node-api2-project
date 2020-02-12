import React, {useState, useEffect} from 'react';
import axios from 'axios';

import "./App.css"




function Users() {

  const [user, setUsers] = useState(0);

useEffect( () => {
  axios.get("http://localhost:5000/api/posts")
  .then(response => {
    setUsers (response.data);
    console.log(response)
  })
  .catch(err => {
    console.error(err); 
  })
}, [])
if (!user) {
  return <div>Loading ... </div>
}



  return (
    <div className="App">
      <h1>List of users</h1>
      
      {user.map(users => 
        <div key ={users.id} className = "info">
        <p>{users.title}</p>
        <p>{users.contents}</p>
       
        
        </div>
      )}
    </div>
  );
}

export default Users;