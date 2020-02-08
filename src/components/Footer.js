import React from 'react';
import '../App.css';
import Logo from './Logo'
import Menu1 from './Menu1'
import Menu2 from './Menu2'
import Text from './Text'

function Footer(props) {
  return (
    <div className="card-footer">
      <div className='container'>
        <div className="row">
          <div className="col-sm-3">
            <Logo/>
          </div>
          <div className="col-sm-3">
            <Menu1 menuItems1={props.menuItems1}/>
          </div>
          <div className="col-sm-3">
            <Menu2 menuItems2={props.menuItems2}/>
          </div>
          <div className="col-sm-3">
            <Text/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
