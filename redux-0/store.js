import { legacy_createStore as createStore } from "redux";

const addtodo=(title)=>{
    return{
        type:"ADD_TODO",
        payload:{
            title:title,
            status:false
        }
    }
}



const reducer=(store,action)=>{
    switch(action.type){
        case "ADD_TODO":
            return {...store,todos:[...store.todos,action.payload]};
        
        default:
            return store;
    }
    
}
const initState={
    todos:[]
    }

const store=createStore(reducer,initState);
store.dispatch({type:"ADD_COUNT",payload:1})

store.dispatch(addtodo("learn redux"))

console.log(store.getState())