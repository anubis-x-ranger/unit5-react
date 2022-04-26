import React from 'react'
import { useEffect , useState} from 'react';
const Timer = ({start,end}) => {
  const [timer, setTimer] = useState(start);
    useEffect(() => {
      const id=setInterval(() => {
        setTimer((prev) => {
          if (prev >= end) {
            clearInterval(id);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    
      return () => {
        clearInterval(id);
        
      };
      
    }, []);
    return (
      <div>{timer!=0 ? <h1>Timer:{timer}</h1>: <Cleanup/>}</div>
    )
 
}
function Cleanup() {
  return (
    <div><h1>Timer has stopped</h1></div>
  )
}
export default Timer