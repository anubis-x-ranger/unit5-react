import React,{useState} from 'react';

const Counter = () => {
    const [counter,setCounter]=React.useState(0);
    const handleIncDec=(value)=>{
        setCounter(counter+value);
    }
    const handleMul=(value)=>{
        setCounter(counter * value);
    }
  return (
    <div>
        <h1>Counter</h1>
        <h3>{counter}</h3>
        <button onClick={()=>handleIncDec(1)}>Increase</button><button onClick={()=>handleIncDec(-1)}>Decrease</button><button onClick={()=>handleMul(2)}>Double</button>
    </div>
  )
}

export default Counter