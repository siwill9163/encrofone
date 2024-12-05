import React from 'react'
import './Decry.css'
import logo from '../../assets/logo.png'

const Decry = () => {
  return (
    <section>
    <div className="main-page-wrapper">
        <img src={logo} alt="logo" />
        <h1>Paste text to be decrypted</h1>
        <textarea name="" id=""></textarea>
        <button className='btn btn-encry-home'>decrypt now</button>
        
        <p className='output'></p>
       
    </div>
</section>
  )
}

export default Decry