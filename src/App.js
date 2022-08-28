import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import ResponsiveNavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <div className="">
      <ResponsiveNavBar />
      <Home/>
    </div>
  );
}

export default App;
