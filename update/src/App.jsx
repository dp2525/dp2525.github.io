import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import AppRoutes from './routes'; 

function App() {

  return (
    <Router> {/* Wrap your AppRoutes with} Router */}
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />  
         <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
