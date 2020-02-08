import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

const menuItems = [{
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

function App() {
  return (
    <div className="App">
      <Header menuItems={menuItems}/>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
