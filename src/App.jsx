import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import Player from './pages/Player';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* path is the url end point and element is the component that is rendered */}
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/player' element={<Player />} />
        <Route exact path='/' element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  );
}
