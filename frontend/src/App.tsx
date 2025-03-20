import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./Home/Home";
import Product from "./Products/Products"; 

import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  };

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

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products"; 

export default App;

