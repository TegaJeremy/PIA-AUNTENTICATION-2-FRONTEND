import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './pages/Landing';
import Home from './pages/Home';
import Wallet from './pages/Wallet';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/validate' element={<Home/>}/>
          <Route path='/unlock-pi-wallet' element={<Wallet/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App;
