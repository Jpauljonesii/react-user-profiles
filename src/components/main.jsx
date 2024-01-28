import React from 'react'
import { useEffect, useState } from 'react'
import UserProfile from './UserProfile'

export default function Main() {

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
            </div>
        );
    });

  return (

      <main> {users} </main>
  );
 
 
  
}