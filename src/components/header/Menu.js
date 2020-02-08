import React from 'react';
import logo from "../../images/logo.svg";

function Menu() {
  return (
    <nav>
      <img src={logo} className='rounded float-left App-logo' alt='logo'/>
      <ul className='nav justify-content-left'>
        <li className='nav-item'>
          <a
            className='nav-link active py-md-4 mr-3'
            href='#MenuItem1'
          >
            MenuItem1
          </a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link active py-md-4 mr-3'
            href='MenuItem2'
          >MenuItem2
          </a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link active py-md-4 mr-3'
            href='MenuItem3'
          >MenuItem3</a>
        </li>
        <li className='nav-item'>
          <a
            className='nav-link active py-md-4 mr-3'
            href='#MenuItem4'
          >
            MenuItem4
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
