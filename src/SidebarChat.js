import { Avatar } from '@mui/material';
//import React, { useEffect } from 'react';
import  './SidebarChat.css';
import { useEffect, useState } from "react";
//import { useEffect } from 'react';
//import { useState } from 'react';
//import { ReactDOM } from 'react';

function SidebarChat() {
    const [seed,setSeed] = useState("");

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    }, []);
  
    return (
    <div className='sidebarChat'>
        <Avatar src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`}/>
        <div className='sidebarChat__info'>
            <h3>Room name</h3>
            <p>Last message</p>
        </div>



                </div>
  )
}

export default SidebarChat