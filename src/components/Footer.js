import React from 'react';
import '../App.css';
import Logo from './Logo'
import Menu1 from './Menu1'
import Menu2 from './'

function Footer(props) {
  return (
    <footer>
      <div className='container'>
        <Logo />
        <Menu1 menuItems1={props.menuItems1} />
        <Menu2 menuItems2={props.menuItems2} />
      </div>
    </footer>
  );
}

export default Footer;
