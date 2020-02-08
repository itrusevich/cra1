import React from 'react';
import '../App.css';
import Menu from './header/Menu'
import Logo from './Logo'


function Header(props) {
  return (
    <div className='card text-center'>
      <div className='card-header'>
        <Logo />
        <Menu menuItems={props.menuItems} />
      </div>
    </div>
  );
}

export default Header;
