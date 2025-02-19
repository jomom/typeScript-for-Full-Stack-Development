import React from 'react'
import { AdminInfoList } from '../types/type'

function AdminUserInfo({name,email,id,role,permissions}: AdminInfoList) {
  return (
    <div>
        <h1>Admin User Information</h1>
        <p>Username: {name}</p>
        <p>ID: {id}</p>
        <p>Email: {email}</p>
        <p>Role: {role}</p>
        <p>Permissions:{permissions.join(',')}</p>
    </div>
  )
}

export default AdminUserInfo