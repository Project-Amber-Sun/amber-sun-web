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
    <Router>
    <div class ="grid-container">
        <header class = "header">
            <div class="brand">
                <button onClick={openMenu}>&#9776;</button>
                <a href="index.html">Amber Sun</a>
            </div>
            <div class="header-links">
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>     
        </header>
<head>
    <link rel="stylesheet" href="style.css">
   <title>Amber Sun</title> 
</head>
<body>
   <div>
        <header>
            Amber Sun
        </header>
        <aside class="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>
                x
            </button>
            <ul>
                <li>
                    <a href="index.html">Pants</a>
                </li>

                <li>
                    <a href="index.html">Shirts</a>
                </li>
            </ul>
            </aside>
        </aside>
        <main>
          <div class="content">
            <ul class="products">
                <li>
                    <div class="product">
                        <img class="product-image" src="images/d1.jpg" alt="product" />
                        <div class="product-name">
                            <a href = "product.html">Slim Shirt</a>
                        </div>
                        <div class="product-brand">Nike</div>
                        <div class="product-price">$60</div>
                        <div class="product-rating">4.5 stars (10 Reviews)</div>
                    </div>
                </li>
                <li>
                    <div class="product">
                        <img class="product-image" src="images/d1.jpg" alt="product" />
                        <div class="product-name">
                            <a href = "product.html">Slim Shirt</a>
                        </div>
                        <div class="product-brand">Nike</div>
                        <div class="product-price">$60</div>
                        <div class="product-rating">4.5 stars (10 Reviews)</div>
                    </div>
                </li>
                <li>
                    <div class="product">
                        <img class="product-image" src="images/d1.jpg" alt="product" />
                        <div class="product-name">
                            <a href = "product.html">Slim Shirt</a>
                        </div>
                        <div class="product-brand">Nike</div>
                        <div class="product-price">$60</div>
                        <div class="product-rating">4.5 stars (10 Reviews)</div>
                    </div>
                </li>
                <li>
                    <div class="product">
                        <img class="product-image" src="images/d1.jpg" alt="product" />
                        <div class="product-name">
                            <a href = "product.html">Slim Shirt</a>
                        </div>
                        <div class="product-brand">Nike</div>
                        <div class="product-price">$60</div>
                        <div class="product-rating">4.5 stars (10 Reviews)</div>
                    </div>
                </li>
                <li>
                    <div class="product">
                        <img class="product-image" src="images/d1.jpg" alt="product" />
                        <div class="product-name">
                            <a href = "product.html">Slim Shirt</a>
                        </div>
                        <div class="product-brand">Nike</div>
                        <div class="product-price">$60</div>
                        <div class="product-rating">4.5 stars (10 Reviews)</div>
                    </div>
                </li>
                <li>
                    <div class="product">
                        <img class="product-image" src="images/d1.jpg" alt="product" />
                        <div class="product-name">
                            <a href = "product.html">Slim Shirt</a>
                        </div>
                        <div class="product-brand">Nike</div>
                        <div class="product-price">$60</div>
                        <div class="product-rating">4.5 stars (10 Reviews)</div>
                    </div>
                </li>
            </ul>
          </div>
        </main>
        <footer> 
            &copy; 2021 Amber Sun
        </footer>
    </div>
</body>
</div>
        </Router>
  );
}

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products"; 

export default App;
