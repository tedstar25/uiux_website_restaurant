import React, {lazy, Suspense} from 'react';

import './App.css';
import './styles.css'
import {Loading} from './pages'

import { Routes ,Route} from 'react-router-dom';

//https://www.youtube.com/watch?v=4oV65GVVits

const Home = lazy(() => import('./pages/home.jsx'));
const Fullmenu = lazy(() => import('./pages/fullmenu.jsx'));
const Booktable = lazy(() => import('./pages/booktable.jsx'));




const Error404 = () => <h1>404 – Seite nicht gefunden</h1>;

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Suspense fallback={<Loading/>}><Home /></Suspense>}  />
      <Route path="/fullmenu" element={<Suspense fallback={<Loading/>}><Fullmenu /></Suspense>}  />
      <Route path="/booktable" element={<Suspense fallback={<Loading/>}><Booktable /></Suspense>}  />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
};

export default App;
