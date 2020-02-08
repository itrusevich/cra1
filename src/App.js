import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

const menuItems1 = [{
  text: 'Home',
  link: 'home-link'
}, {
  text: 'Products',
  link: 'products-link'
}, {
  text: 'Service',
  link: 'service-link'
}, {
  text: 'Contacts',
  link: 'contacts-link'
}
];

const menuItems2 = [{
  text: 'Jobs',
  link: 'jobs-link'
}, {
  text: 'About Us',
  link: 'about-link'
}, {
  text: 'Address',
  link: 'address-link'
},
];

function App() {
  return (
    <div className="App">
      <Header menuItems1={menuItems1}/>
      <Content/>
      <Footer menuItems1={menuItems1} menuItems2={menuItems2}/>
    </div>
  );
}

export default App;
