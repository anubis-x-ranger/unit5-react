import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
const UserDetails = () => {
    const {id}=useParams();
    const[user,setUser]=useState({});

    useEffect(()=>{
      axios.get(`https://reqres.in/api/users/${id}`).then(({data})=>{
        setUser(data.data);
      })
    },[]);
  return (
    <div>
    <img src={user.avatar} alt="" />
    <div>First Name:{user.first_name}</div>
    <div>Last Name:{user.last_name}</div>
    </div>
  )
}

export default UserDetails