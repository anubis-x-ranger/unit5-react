import { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import Button from "../src/components/Button"
function App() {
  const [count, setCount] = useState(0)

  return (
    <ButtonWrapper>
      <Button background="#2490fd" color="white" >Primary Button</Button>
      <Button background="white" color="black" bordertype="solid" borderColor="gray">Default Button</Button>
      <Button background="white" color="black" bordertype="dashed" borderColor="gray">Dashed Button</Button>
      <Button background="white" color="black">Text Button</Button>
      <Button background="white" color="#2490fd">Link Button</Button>
    </ButtonWrapper>
     
    
  )
}

export default App


const ButtonWrapper=styled.div`
 border:1px solid transparent;
 height:180px;
 width:600px;
 margin:auto;
 justify-content:center;
 display:grid;
 grid-template-columns: repeat(3,1fr);
 margin-top: 10px;
`;