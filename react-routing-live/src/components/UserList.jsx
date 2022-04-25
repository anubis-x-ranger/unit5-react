import { useEffect, useState } from "react";
import axios from "axios"
import React from 'react'
import { Link } from "react-router-dom";
const UserList = () => {
    const [users, setUsers]=useState([]);
    useEffect(() => {
      axios.get("https://reqres.in/api/users").then(({data})=>{
            setUsers(data.data);
      });
    
      
    }, []);
    
  return (
    <div>{users.map((user)=>(
        <p key={user.id}><Link to={`/users/${user.id}`}>{user.id}.{user.first_name}</Link></p>
    ))}</div>
  )
}

export default UserList