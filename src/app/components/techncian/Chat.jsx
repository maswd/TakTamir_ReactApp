import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function Chat() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState("");
  
    useEffect(() => {
      // define the socket listener once
      socket.on("message", (msg) => {
        setMessages((prevMessages) => [...prevMessages, msg]);
      });
  
      // cleanup the socket listener when the component unmounts
      return () => {
        socket.off("message");
      };
    }, []);
  
    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    };
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handleMessageSubmit = (event) => {
      event.preventDefault();
      if (message.trim() !== "") {
        socket.emit("message", { username: username, text: message }); // send the username along with the message
        setMessage("");
      }
    };
  
    return (
      <div>
        <h1>Chat App</h1>
        <div>
          {messages.map((msg, index) => (
            <div key={index} className="d-flex ">
              <small>{msg.username}</small>:
              <div >{msg.text}</div>
            </div>
          ))}
        </div>
        <form onSubmit={handleMessageSubmit}>
          <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
          <input type="text" placeholder="Message" value={message} onChange={handleMessageChange} />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
  
  export default Chat;