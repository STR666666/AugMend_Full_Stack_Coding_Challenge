import React from 'react';
import './Logo.css';
import augmend_icon from '../Assets/augmend_icon.png';

export const Logo = () => {
  return (
    <div className="header-row">
      <img src={augmend_icon} alt="Augmend Logo" className="logo-image" />
      <span className="company">augmend</span>
    </div>
  );
};

export default Logo; // Make sure to export your component
