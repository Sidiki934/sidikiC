import React from 'react';
import './App.css';
import Clock from './clock';
import Footer from './footer';
import Foot from './foot';
import Body from './body';

function Application() {
  return (
    <div>
      <Clock />
      <Body />
     <Footer /> 
     <Foot />
    </div>
  );
}

export default Application;
