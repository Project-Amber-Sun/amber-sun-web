import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }
  
  return (
    <div class ="grid-container">
    <header class = "header">
        <div class="brand">
            <button onclick="openMenu()">&#9776;</button>
            <a href="index.html">Amber Sun</a>
        </div>
  );
}

export default App;
