import {useState} from 'react'
import TodoItem from './TodoItem'
const TodoList = () => {
const [todoList,setTodoList]=useState([]);

const getdata=(todo)=>{
    setTodoList([...todoList,todo])
}
  return (
    <div>
        {todoList.map((e)=>{
            <div>{e}</div>
        })}
        <TodoItem getdata={getdata}/>
    </div>
  )
}

export default TodoList