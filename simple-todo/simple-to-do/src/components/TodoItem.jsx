import {useState} from 'react'

const TodoItem = ({getdata}) => {
    const [item,setItem]=useState("")
  return (
    <div>
        <input onChange={(e)=>{
        setItem(e.target.value)
    }} type="text" placeholder=" Write a List "/>
    <button onClick={()=>{
        getdata(item)
    }}>+</button>
    </div>
  )
}

export default TodoItem