import React from 'react';
import {info} from '../types/type'




const UserInfo: React.FC<info> = ({name,email,id}) => {
  return (
    <div>
        <h1>User Information</h1>
        <p>Username: {name}</p>
        <p>ID: {id}</p>
        <p>Email: {email}</p>
    </div>
  )
}

export default UserInfo