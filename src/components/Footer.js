import React from 'react';
import '../App.css';
import logo from "../images/logo.svg";

function Footer() {
  return (
    <div className='card text-center'>
      <div className='card-footer'>
        <img src={logo} className='rounded float-left App-logo2' alt='logo'/>
        Footer
      </div>
    </div>
  );
}

export default Footer;
