import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

//https://www.youtube.com/watch?v=4oV65GVVits

const App = () => (
  <div>
    <div className='app_navbar'>
      <Navbar />
    </div>
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer /> 
  </div>
);

export default App;
