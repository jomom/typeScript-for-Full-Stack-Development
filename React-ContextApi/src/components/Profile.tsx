import React from "react";
import { useUser } from "./UserContext";

const Profile = () => {
  const user = useUser();

  return (
    <section style={{ border: "1px solid #ccc", padding: "10px" }}>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </section>
  );
};

export default Profile;
