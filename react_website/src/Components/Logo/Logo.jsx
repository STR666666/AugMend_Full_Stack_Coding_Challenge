import React from 'react'
import './Logo.css'
import augmend_icon from '../Assets/augmend_logo.png'

export const Logo = () => {
  return (
    <div className="logocont">
      <div className="Webshop" id="Webshop">
        <img src={augmend_icon} alt="" width="40" />
        <div className="company">augmend</div>
      </div>
    </div>
  )
}