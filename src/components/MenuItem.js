import React from 'react';

function MenuItem(props) {

  console.log(props);

  return (
        <li className='nav-item'>
          <a
            className='nav-link active py-md-4 mr-3'
            href={props.menuItem.link}
          >
            {props.menuItem.text}
          </a>
        </li>
  );
}

export default MenuItem;
