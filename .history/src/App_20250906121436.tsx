import { useState } from 'react'
import 'destyle.css';
import './App.scss'
import Sidebar from './component/sidebar/Sidebar'
import Chat from './component/chat/Chat';
import { useSelector } from 'react-redux';
import Login from './component/login/Login';
import { useAppSelector } from './app/hooks';


const App = () => {
  const user = useAppSelector ( (state => state.user));
  console.log(user)
  // const user = null;
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

