import React from 'react';
import '../App.css';
import Menu from './header/Menu'


function Header() {
  return (
    <div className='card text-center'>
      <div className='card-header'>
        <Menu/>
      </div>
    </div>
  );
}

export default Header;
