import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Homepage from './components/Homepage';
import NavBar from './components/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <Homepage />
  </React.StrictMode>
);

