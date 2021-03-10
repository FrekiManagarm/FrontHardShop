import React from 'react';
import { BrowserRouter as BRouter } from 'react-router-dom';
// import Hero from './components/Navbar/Hero';
// import Navbar from './components/Navbar/Navbar';
import AppRouter from './router';


const App = () => {
  return (
    <BRouter>
      <AppRouter />
    </BRouter>
    
  )
}

export default AppRouter;
