import React from 'react'
import "./Login.scss" 
import { Button } from '@mui/material'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from "../../firebase"

const Login = () => {
  // Google プロバイダーを作成
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" }); 

  const signIn = () => {
    signInWithPopup(auth, provider)
      .catch((err) => {
        alert("エラーが発生しました");
      });
  }

  return (
    <div className="login">
      <div className="loginLogo">
        <img src=".discordlogin.png" alt="" />
      </div>
      <Button onClick={signIn}>ログイン</Button>
    </div>
  )
}

export default Login
