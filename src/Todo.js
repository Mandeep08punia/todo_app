import {  List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import './Todo.css';
import React from 'react'

function Todo(props) {
    return (
        <List>
        <ListItem>
        <ListItemAvatar>
            
        </ListItemAvatar>
        <ListItemText primary={props.text} secondary={props.text}/>
        
        </ListItem>                
        </List>
    )
}

export default Todo