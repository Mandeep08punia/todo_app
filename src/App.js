import React,{useEffect, useState} from "react";
import {Button, FormControl,  Input, InputLabel} from "@material-ui/core";
import './App.css';
import Todo from "./Todo";
import db from "./firebase"
import firebase from "firebase"

function App() {
  const [todos,setTodos]=useState([]);
  const [input,setInput]=useState('');
  
  // when the app loads ,I need to listen to the database and fetch new todos as they get added/removed
  useEffect(()=>{
    // this code will fire when the app.js load
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      //console.log(snapshot.docs.map(doc=>doc.data().todo));
      setTodos((snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo}))))
    })
  },[]);

  const addToDo=(event)=>{
    //this will fire off when we click the button
    event.preventDefault();//It will stop the refresh
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput('');//clear up the input after clicking add todo button
    
  }

  return (
    <div className="App">
    <div className="App_style">
    <h1> To-do app</h1>
    <h5 >Built by Mandeep Punia</h5>
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
        <Todo todo={todo}/>        
      ))}
    </ul>
    </div>   
    </div>
  );
}

export default App;
