import React, { Component } from 'react'
import "./Chat.scss" 
import ChatHeader from './ChatHeader'
import { AddCircleOutline } from '@mui/icons-material'

const Chat = () => {
  return (
    <div className='chat'>
      <ChatHeader />
      <div className="chatInput">
        <AddCircleOutline/>
      </div>
    </div>
  )
}

export default Chat