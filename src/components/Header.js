import React from 'react';
import '../App.css';
import Menu1 from './Menu1'
import Logo from './Logo'


function Header(props) {
  return (
    <header>
      <div className='container'>
        <Logo />
        <Menu1 menuItems1={props.menuItems1}/>
      </div>
    </header>
  );
}

export default Header;
