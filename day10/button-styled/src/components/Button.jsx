import styled from "styled-components"
const Button=styled.button`
    height:40px;
    width:150px;
    border:none;
    font-family: "Proxima Nova Regular", sans-serif;
    border-radius: 5px;
    margin-left: 10px;
    margin: 10px 0px;
    cursor:pointer;
    background-color:${(props)=>props.background};
    color:${(props)=>props.color};
    border-style: ${(props)=>props.bordertype=== "dashed" ? "dashed": props.bordertype=== "solid" ? "solid" : "none"};
    border-color: ${(props)=>props.borderColor=== "gray"  ? "gray" : "none"};
`;
export default Button
