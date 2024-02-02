import { useEffect, useState } from 'react'
import UserProfile from './UserProfile';

export default function UserList() {
    const [state, setState] = useState([]);
  
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((json) => {
          console.log(json);
          setState(json);
      });
  
  },[]);
  
  const users = state.map((user, index) => {
      return (
        <UserProfile key={index} name={user.name} phone={user.phone} email={user.email} /> 
      );
  });
    return (
    
      <main className='p-2 m-3 bg-secondary'>
        <h2>{users} </h2>
      </main>
    
    
    )



}
