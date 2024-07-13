import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import Coins from './pages/Coins.js';
import Excanges from './pages/Excanges.js';
import Aboutus from './pages/aboutus.js';

function App() {
  return (<div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />  
          <Route path='/home' element={<Home/>} />
          <Route path='/coins' element={<Coins/>} />
          <Route path='/excanges' element={<Excanges/>} />
          <Route path='/about-us' element={<Aboutus/>} />
        </Routes>
      </BrowserRouter>
    </div>);
}

export default App;
