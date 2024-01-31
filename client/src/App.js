import React from 'react';

import { Booktable, Fullmenu, Home } from './pages';

import './App.css';
import './styles.css'

import { Routes ,Route} from 'react-router-dom';

//https://www.youtube.com/watch?v=4oV65GVVits




const Error404 = () => <h1>404 – Seite nicht gefunden</h1>;

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/fullmenu" element={<Fullmenu/>} />
      <Route path="/booktable" element={<Booktable/>} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
};

export default App;
