import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'

const Login = () => {
    const {handleAuth}=useContext(AuthContext);

    const navigate=useNavigate()
  return (
    <div>
        <input type="text" placeholder="username" />{" "}
        <input type="text" placeholder="password" />
        <button onClick={()=>{
            handleAuth(true);
            navigate("/",{replace:true});
        }}>Submit</button>
    </div>
  )
}

export default Login