import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Timer from './components/Timer';
function App() {
  const [show, setShow] = useState(true);
  const start=10;
  const end=20;
  return (
    <div className="App">
      {show ? <Timer start={start} end={end}/> : ""}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide Timer Button" : "Show Timer Button"}
      </button>
    </div>
  )
}

export default App
