import React from 'react'
import "./register.css"

export default function Register() {
  return (
    <div className='register'>
      <div className="registerWrapper">
        <div className="registerLeft">
        <h3 className="registerLogo">Satyabrata</h3>
          <span className="registerDesc">Connect with your friends and family with Satyabrata</span>
        </div>
        <div className="registerRight">
            <div className="registerBox">
                <input placeholder="Enter your Mail/Mobile Number" className="registerInput" />
                <input placeholder="Enter your Name" className="registerInput" />
                <input placeholder="Create UserName" className="registerInput" />
                <input placeholder="Create Password" className="registerInput" />
                <input placeholder="Re-enter Password" className="registerInput" />
                <button className="registerButton">Sign-Up</button>
                <button className="registerHaveButton">Already have an Account:Login</button>
            </div>
        </div>
      </div>
    </div>
  )
}
