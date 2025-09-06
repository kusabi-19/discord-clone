import { useEffect, useState } from 'react'
import 'destyle.css';
import './App.scss'
import Sidebar from './component/sidebar/Sidebar'
import Chat from './component/chat/Chat';
import { useSelector } from 'react-redux';
import Login from './component/login/Login';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { auth } from './firebase';
import { login, logout } from './features/userSlise';


const App = () => {
  const user = useAppSelector ( (state => state.user));
  // const dispatch = useAppDispatch()
  // useEffect(() => {
  //   auth.onAuthStateChanged((loginUser) => {
  //     console.log(loginUser);
  //     if(loginUser) {
  //       dispatch(
  //         login({
  //           uid: loginUser.uid,
  //           photo: loginUser.photoURL,
  //           email: loginUser.email,
  //           displayName: loginUser.displayName,
  //         })
  //       );
  //     } else {
  //       dispatch(logout());
  //     }
  //   });
  // },[dispatch]);
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

