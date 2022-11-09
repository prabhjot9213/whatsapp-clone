import React from 'react';
import './Chat.css';
import { useEffect,useState } from "react";
import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';

function Chat() {
    const [seed,setSeed] = useState("");
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    }, []);



  return (
    <div className='chat'>
        <div className='chat__header'>
        <Avatar src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`}/>
        <div className='chat__headerInfo'><h3>Room name</h3><p>last seen ...</p></div>
        <div className='chat__headerRight'>
            <IconButton><SearchOutlined /></IconButton>
            <IconButton><AttachFile /></IconButton>
            <IconButton><MoreVert /></IconButton>
        </div>
        </div>
        <div className='chat__body'></div>
        <div className='chat__footer'></div>
    </div>
  )
}

export default Chat