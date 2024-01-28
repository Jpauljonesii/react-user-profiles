import React from 'react'

export default function UserProfile({name, email, phone}) {
  return (
    <div>
        <p>Name: {name} </p>
        <p>Email: {email} </p>
        <p>Phone: {phone} </p>
    </div>
  )
}
