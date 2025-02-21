import React from "react";
import { useUser } from "./UserContext";

const Sidebar = () => {
  const user = useUser();

  return (
    <aside style={{ border: "1px solid #ccc", padding: "10px" }}>
      <h2>Sidebar</h2>
      <p>Welcome, {user.name}!</p>
    </aside>
  );
};

export default Sidebar;
