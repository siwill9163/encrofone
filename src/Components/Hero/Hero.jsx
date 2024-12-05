import React from 'react'
import './Hero.css'


import logo from '../../assets/logo.png'

const Hero = () => {
  return (
   
        <div className="main-page-wrapper">
            <img src={logo} alt="logo" />
            <button className='btn btn-encry'>Encrypt a message</button>
            <button className='btn btn-decry'>Decrypt a message</button>
        </div>
        
    
  )
}

export default Hero