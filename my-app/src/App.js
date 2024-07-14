import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import Coins from './pages/Coins.js';
import Aboutus from './pages/aboutus.js';
import Favourite from './pages/favourite.js';
import Profile from './pages/profile.js';

function App() {
  return (<div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />  
          <Route path='/home' element={<Home/>} />
          <Route path='/coins' element={<Coins/>} />
          <Route path='/about-us' element={<Aboutus/>} />          
          <Route path='/favourite' element={<Favourite/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </div>);
}

export default App;
