import {useState} from 'react'
import Button from './Button';
const Counter = () => {
    const [count, setCount] = useState(0);
    const handleincrement=(e)=>{
      setCount(count+e);
    }
    return (
      <div >
        <h1 style={{
          color:count%2===0 ? "green":"red"
        }}>Count:{count}</h1>
        <Button onClick={()=>handleincrement(1)} > Increment</Button>   
        <Button onClick={()=>handleincrement(-1)}>Decrement</Button>  
        <Button onClick={()=>handleincrement(count)}>Double</Button>  
    </div>
    )
}

export default Counter