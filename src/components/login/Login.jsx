import React from 'react'
import './login.css'
export default function Login() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Satyabrata</h3>
          <span className="loginDesc">Connect with your friends and family on Satyabrata</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
          <input placeholder="Email" className="loginInput" />
          <input placeholder="password" className="loginInput" />
          <button className="loginButton">Log In</button>
          <span className="loginForgot">Forgot the password?</span>
          <button className="loginRegisterButton">Create a new account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
