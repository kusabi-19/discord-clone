import { useState } from 'react'
import 'destyle.css';
import './App.scss'
import Sidebar from './component/sidebar/Sidebar'
import Chat from './component/chat/Chat';

const App = () => {
  return (
    <>
      <div className='app'>
        <Sidebar />
        <Chat />
      </div>
    </>
  )
}

export default App

