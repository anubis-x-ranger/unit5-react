import React from 'react'

const Button = ({children,onClick}) => {
  return (
    <button onClick={onClick} style={{
        margin:"10px 10px"
      }}>
        {children}
    </button>
  )
}

export default Button