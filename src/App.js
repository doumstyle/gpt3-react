import React from 'react';
import './App.css';
import { Header, Blog, Features, Possibility, WhatGPT3, Footer } from "./containers";
import { Brand, Navbar, Cta } from './components';

function App() {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
