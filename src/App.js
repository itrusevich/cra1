import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/Counter';

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
  const [totalCount1, setTotalCount1] = useState (3);
  const [totalCount2, setTotalCount2] = useState (3);

  return (
    <div className="App">
      <Header menuItems1={menuItems1}/>
      Total: {totalCount1 + totalCount2}
      <Counter countChanges={setTotalCount1} initialValue={totalCount1}/>
      <hr/>
      <Counter countChanges={setTotalCount2} initialValue={totalCount2}/>
      <Footer menuItems1={menuItems1} menuItems2={menuItems2}/>
    </div>
  );
}

export default App;
