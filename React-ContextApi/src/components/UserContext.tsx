import React, { createContext, useContext, ReactNode } from "react";

// Define the user type
interface User {
  name: string;
  email: string;
}

// Create a context with default value as null
const UserContext = createContext<User | null>(null);

// Create a provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const user: User = { name: "John Doe", email: "john@example.com" };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

// Custom hook for using UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
