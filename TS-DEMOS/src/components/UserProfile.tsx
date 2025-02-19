import React, { useState } from "react";

// Define the type for the user profile object
interface UserProfile {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
}

const UserProfile = () => {
  // Define a state variable with an explicit type (UserProfile)
  const [user, setUser] = useState<UserProfile>({
    name: "John Doe",
    age: 25,
    email: "john.doe@example.com",
    isActive: true,
  });

  // Destructure the user object
  const { name, age, email, isActive } = user;

  const toggleActiveStatus = () => {
    setUser((prevUser) => ({
      ...prevUser,
      isActive: !prevUser.isActive,
    }));
  };

  return (
    <div>
      <h1>User Profile</h1>

      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email:{email}</p>
      <p>
        Activity:{" "}
        {isActive ? "Currently active" : "Currently user isn't active"}
      </p>
      <button onClick={toggleActiveStatus}>Toggle Active</button>
    </div>
  );
};

export default UserProfile;
