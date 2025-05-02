import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'flowbite';

import logo from './assets/finlogo.png';
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header className="App-header md:p-8 p-4">
      <img src={logo} className="App-logo" alt="logo" />
    </header>

    <App />

  </React.StrictMode>
);


