import React from 'react'
import './Encry.css'
import logo from '../../assets/logo.png'

const Encry = () => {
  return (
    <section>
        <div className="main-page-wrapper">
            <img src={logo} alt="logo" />
            <h1>Enter text to be encrypted</h1>
            <textarea name="" id=""></textarea>
            <button className='btn btn-encry'>encrypt now</button>
            
            <p className='output'></p>
            <button className='copy'>copy</button>
        </div>
    </section>
  )
}

export default Encry