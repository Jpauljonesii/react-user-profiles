import React from "react";

export default function UserProfile({ name, email, phone }) {
  return (
    <div className="border p-2 m-3 bg-light">
      <p>Name: {name} </p>
      <p> Email: {email} </p>
      <p> Phone: {phone} </p>
    </div>
  );
}
