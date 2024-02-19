import React from "react";
import UserList from "./UserList";
import LoginForm from "./LoginForm";

export default function Main() {
  return (
    <>
      <LoginForm />

      <div className="bg-dark border-dark border-5 mt-5 p-5">
        <UserList />
      </div>
    </>
  );
}
