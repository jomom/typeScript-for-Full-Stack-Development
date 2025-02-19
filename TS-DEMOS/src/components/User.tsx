import React from "react";

interface userProps {
  name: string;
  age: number;
  isStudent: boolean;
}

const User: React.FC<userProps> = ({ name, age, isStudent }) => {
  return (
    <div>
      <h1>User Information</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Status: {isStudent ? "user is a student" : "User is not a student"}</p>
    </div>
  );
};

export default User;
