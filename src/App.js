import React, { useState, useEffect } from 'react';
import './App.css';
import { Button , FormControl, Input, InputLabel} from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(()=>{
    setUsername(prompt('Write users name'));
  },[]
  );
 
  useEffect(()=>{
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => (
        {id: doc.id, message: doc.data()}
        ) ))
    });
  },[]);

  const textHandler = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('messages').add({
      text: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  };
  
  
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="logo"/>
      <h1>Hello</h1>
      <h2>Welcome, {username}</h2>
      
      <form className="app_form">
      <FormControl className="app_formControl">
      
          <Input className="app_input" placeholder="Enter a message..." onChange={textHandler} value={input}/>
          
          <IconButton className="app_iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <SendIcon />
          </IconButton>

      </FormControl>
      </form>
     

      {/* message themselves */}
      <FlipMove>
        {
          messages.map( ({ id, message }) => (
          <p><Message key={id} username={username} message={message}/></p>

          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
