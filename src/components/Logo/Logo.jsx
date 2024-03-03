import React from 'react';
import './Logo.css';

export const Logo = () => {
  // External image URL
  const augmend_icon = "https://assets-global.website-files.com/63ed66efadb8bc109fc6330c/63ee84caab7b90b056549581_220921_logo_transparent-37.png";

  return (
    <div className="header-row">
      <img src={augmend_icon} alt="External Logo" className="logo-image" />

      <span className="company">augmend</span>
    </div>
  );
};

export default Logo;
