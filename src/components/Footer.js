import React from 'react';
import '../App.css';
import Logo from './Logo'

function Footer() {
  return (
    <div className='card text-center'>
      <div className='card-footer'>
        <Logo />
        Footer
      </div>
    </div>
  );
}

export default Footer;
