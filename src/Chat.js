import React, { useState } from "react";
import "./Chat.css";
import { AttachFile, MoreVert, SearchOutlined } 
from "@mui/icons-material";
import InsertEmotionIcon from "@mui/icons-material/InsertEmoticon";
import { Avatar, IconButton } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import axios from "./axios"; 

function Chat({ messages }) {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

      await axios.post('/messages/new',{
      message: input,
      name: "demo",
      timestamp: "just now!",
      received: false
    });

    setInput('');
  };
    return(
        <div className="chat">
            <div className="chat_header">
                <Avatar />

                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at .......</p>
                </div>

                <div className="chat_headerRight">
                  <IconButton>
                    <SearchOutlined/>
                  </IconButton>
                  <IconButton>
                    <AttachFile />
                  </IconButton>
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                </div>
            </div>
            <div className="chat_body">
              {messages.map((message) => (
                <p className={`chat_message ${message.received && "chat_reciever"}`}>
                  <span className="chat_name">{message.name}</span>
                  {message.message}
                  <span className="chat_timestamp">{new Date().toDateString()}</span>
                </p>
              ))}              
             </div>

             <div className="chat_footer">
              <InsertEmotionIcon />
              <form>
                <input value={input} onChange={e => setInput(e.target.value)}setInput
                placeholder="Type a msg"
                type="text" />
                <button onClick={sendMessage} type="submit">send</button>
              </form>
              <MicIcon />
             </div>

        </div>
    );
}

export default Chat;

/* {message.timestamp} */