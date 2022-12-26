import React from 'react';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';

import Home from './core/Home'

const Routers = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routers;
