import { useState } from 'react'
import 'destyle.css';
import './App.scss'
import Sidebar from './component/sidebar/Sidebar'
import Chat from './component/chat/Chat';
import { useSelector } from 'react-redux';
import { Login } from '@mui/icons-material';

const App = () => {
  // const user = useSelector ( (state => state.user.user));
  const user = null;
  return (
    <>
      <div className='app'>
        { user ?(
          <>
            <Sidebar />
            <Chat />
          </>
        ): (
          <>
            <Login />
          </>
        )
        }

      </div>
    </>
  )
}

export default App

