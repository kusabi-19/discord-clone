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
import { ErrorBoundary } from 'react-error-boundary';
import { Fallback } from './utils/fallback';


const App = () => {
  const user = useAppSelector ( (state => state.user.user));
  const dispatch = useAppDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log(loginUser);
      if(loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  },[dispatch]);
  return (
    <>
      <div className='app'>
        { user ?(
          <>
            <ErrorBoundary FallbackComponent={Fallback}>
              <Sidebar />
            </ErrorBoundary>

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

