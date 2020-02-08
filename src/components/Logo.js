import React from 'react';
import '../App.css';
import logo from "../images/logo.svg";



function Logo() {
  return (
    <div>
      <img src={logo} className='rounded float-left App-logo' alt='logo'/>
    </div>
  );
}

export default Logo;
