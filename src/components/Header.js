import React from 'react';
import '../App.css';
import Menu1 from './Menu1'
import Logo from './Logo'


function Header(props) {
  return (
    <div className="card-header">
      <div className='container'>
        <Logo />
        <Menu1 menuItems1={props.menuItems1}/>
      </div>
    </div>
  );
}

export default Header;
