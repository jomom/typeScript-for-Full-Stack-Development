// import React from 'react'
import User from "./components/User";
import Button from "./components/Button";
import AdminUserInfo from "./components/AdminUserInfo";
import UserInfo from "./components/userinfo";
import { useState } from "react";
import UserProfile from "./components/UserProfile";
import TodoList from "./components/TodoList";

const App = () => {
  //handle click
  const handleClick = () => {
    console.log("Handle Click!");
  };

  //use state 
  const [count,setCount ] = useState<number>(0);
  const incrementCounter = () => { setCount(count+1)}


  return (
    <div>
      <User name="Joel" age={27} isStudent={true} />
      <User name="Joel kim" age={27} isStudent={false} />

      <Button label="Click me" onClick={handleClick} disabled={false} />
      <UserInfo id="030" name="Lilian Himba" email="lh030@xyz.com" />

      <AdminUserInfo
        id="034"
        name="Jarrod"
        email="bxc@xyz.com"
        role="supervisor"
        permissions={["Moderator", "Editor"]}
      />


      <div>
        <h1>Count: {count}</h1>
        <button onClick={incrementCounter}>+</button>
      </div>
      <UserProfile />
      <TodoList/>
      


    </div>
  );
};

export default App;
