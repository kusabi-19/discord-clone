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
        <form>
          <input type='text' placeholder='testへメッセージ送信'/>
          <button type='submit' className='chatInputbutton'>
            送信
          </button>
        </form>
      </div>
    </div>
  )
}

export default Chat