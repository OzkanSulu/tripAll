import React from 'react'
import logo from "../../assets/logo.png"
import Buttons from '../../helpers/Buttons'
import "./Navbar.css"


export default function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <div className='navContainer'>
          <div className='logoDiv'>
          <h1 className='logo'>Tripall</h1>
          </div>
          <div className='navBtns'>
            <Buttons title="register"/>
            <Buttons title="Sign In"/>
          </div>
        </div>
      </div>
    </div>
  )
}
