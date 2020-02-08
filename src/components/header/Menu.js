import React from 'react';
import MenuItem from "./MenuItem";


function Menu(props) {
  return (
    <nav>
      <ul className='nav justify-content-left'>
        {props.menuItems.map(el => <MenuItem key={el.text} menuItem={el}/>)}
      </ul>
    </nav>
  );
}

export default Menu;
