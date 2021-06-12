import React, { useState, useEffect } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Navbar from './components/Navbar';
import Scrolllinks from './components/Scrolllinks';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  })

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Scrolllinks />
    </>
  );
}

export default App;
