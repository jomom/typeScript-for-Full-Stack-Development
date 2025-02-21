import React from "react";
import { UserProvider } from "./UserContext";
import Sidebar from "./Sidebar";
import Profile from "./Profile";

const Dashboard = () => {
  return (
    <UserProvider>
      <div style={{ display: "flex", gap: "20px" }}>
        <Sidebar />
        <Profile />
      </div>
    </UserProvider>
  );
};

export default Dashboard;
