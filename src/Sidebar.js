import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React from 'react'
import './Sidebar.css'


function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
        <Avatar />
                
        <div className='sidebar__headerRight'>
        <IconButton>
        <DonutLarge />
        </IconButton>
        <IconButton>
        <Chat />
        </IconButton>
        <IconButton><MoreVert /></IconButton>
              
        </div>
        </div>
        <div className='sidebar__search'>
        <SearchOutlined />
        <input placholder="Search or Start a new chat" type ="text" />
        </div>
        <div className='sidebar__chats'>

        </div>

        
    </div>
  )
}

export default Sidebar;