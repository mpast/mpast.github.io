import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Apps from './components/Apps';
import Contact from './components/Contact';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="App-header">
      <Header></Header>
      </div>
      
      <div className='about'>
        <About></About>
      </div>
      <div className='apps'>
        <Apps></Apps>
      </div>
      <div className='contact'>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
