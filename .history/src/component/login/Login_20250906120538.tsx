import React from 'react'
import "./Login.scss" 
import { Button } from '@mui/material'

const Login = () => {
  return (
 <div className="login">
      {/* <h2>ログインページです。</h2> */}

      <div className="loginLogo">
        <img src="./discordlogin.png" alt="" />
      </div>

      <Button>ログイン</Button>
    </div>
  )
}

export default Login