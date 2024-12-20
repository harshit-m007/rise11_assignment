import React from 'react';
import Sidebar from './components/Sidebar.js';
import FileClaim from './components/FileClaim.js';
import { FaBell, FaUserCircle } from 'react-icons/fa'; // Importing icons
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <header className="header">
          <div className="header-icons">
            <FaBell className="icon bell-icon" /> 
            <FaUserCircle className="icon user-icon" />
          </div>
        </header>
        <FileClaim />
      </div>
    </div>
  );
}

export default App;
