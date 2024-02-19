import React from 'react'
import { useState } from 'react'

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(email,password);
    }
  return (

    <form onSubmit={handleSubmit}>
        <input type="email" 
        placeholder ="email" 
        value={email} 
        onChange={(event)=> setEmail(event.target.value)} 
        required
        />
        <input type="password" 
        placeholder="password" 
        value={password} 
        onChange={(event)=> setPassword (event.target.value)}
        required
        /> 
     <button type="submit">Login</button>
     </form>  
    
  );
}
