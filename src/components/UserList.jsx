import { useEffect, useState } from 'react'


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
          <div key={index}>
              <h3>{user.name}</h3>
              <h3>{user.phone}</h3>
              <h3>{user.email}</h3>
          </div>
      );
  });
    return (
    
      <main>
        <h2>{users} </h2>
      </main>
    
    
    )



}
