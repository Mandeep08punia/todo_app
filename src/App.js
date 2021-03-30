import React,{useState} from "react";
import {Button, FormControl, FormHelperText, Input, InputLabel} from "@material-ui/core";
import './App.css';
import Todo from "./Todo";

function App() {
  const [todos,setTodods]=useState(['Take dogs for a walk','mandeep punia','Take the rubbish out']);
  const [input,setInput]=useState('');
  console.log(''+input);
  const addToDo=(event)=>{
    //this will fire off when we click the button
    event.preventDefault();//It will stop the refresh
    console.log(''+"i am working");
    setTodods([...todos,input]);
    setInput('');//clear up the input after clicking add todo button
    console.log(todos);
  }

  return (
    <div className="App">
    <h1> To-do app</h1>
    <form>
    <FormControl>
    <InputLabel >Write a Todo</InputLabel>
    <Input value={input} onChange={event=>setInput(event.target.value)}></Input>
          
    </FormControl>
    <Button disabled={!input} type="submit" onClick={addToDo} variant="contained" color="primary">
     Add todo
    </Button>
    {/* <button type="submit" onClick={addToDo}>Add todo</button> */}
    
    </form>
    <ul>
      {todos.map(todo=>(
        <Todo text={todo}/>
        //<li>{todo}</li>
      ))}
    </ul>   
    </div>
  );
}

export default App;
