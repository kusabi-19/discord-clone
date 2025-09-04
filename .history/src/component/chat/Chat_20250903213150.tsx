import React, { Component } from 'react'
import "./Chat.scss" 
import ChatHeader from './ChatHeader'
import { AddCircleOutline, CardGiftcard, EmojiEmotions, Gif } from '@mui/icons-material'

const Chat = () => {
  return (
    <div className='chat'>
      <ChatHeader />
      <div className="chatInput">
        <AddCircleOutline/>
        <form>
          <input type='text' placeholder='testへメッセージ送信'/>
          <button type='submit' className='chatInputButton'>
            送信
          </button>
        </form>
        <div className='chatInputIcons'>
          <CardGiftcard />
          <Gif />
          <EmojiEmotions/>
        </div>
      </div>
    </div>
  )
}

export default Chat