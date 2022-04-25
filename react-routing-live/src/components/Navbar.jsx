import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const nav=[
        {title:"Home", to:"/"},
        {title:"About", to:"/about"},
        {title:"UserList", to:"/users"}
    ]
  return (
    <div>
        {
            nav.map((e,i)=>(
                <Link key={i} to={e.to}  style={{
                    mLinkrgin: "10px 10px",                    
                }}>{e.title}</Link>
            ))
        }
    </div>
  )
}

export default Navbar