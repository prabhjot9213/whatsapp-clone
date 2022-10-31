import { Avatar } from '@mui/material';
import { DonutLargeIcon } from '@mui/material';
import { ChatIcon } from '@mui/material';
import { MoreVertIcon } from '@mui/material';
import React from 'react'
import './Sidebar.css'


function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
        <Avatar />
        <div className='sidebar__headerRight'>
        <DonutLargeIcon />
         <ChatIcon />
         <MoreVertIcon/>  
        </div>
        </div>
        <div className='sidebar__search'>

        </div>
        <div className='sidebar__chats'>

        </div>

        
    </div>
  )
}

export default Sidebar;