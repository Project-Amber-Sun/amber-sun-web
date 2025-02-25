import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./Home/Home";
import Product from "./Products/Products";
import Orders from './Orders/Orders'
import OrderDetail from './Orders/OrderDetails'
import Payment from './Payment/Payment'

import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  };

  return (
    <Router>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Amber Sun</Link>
            <div className="header-links">
              <Link to="/">Home</Link>
              <Link to="/catalog">Catalog</Link> {/* Fixed closing tag */}
              <Link to="/orders">Orders</Link>
            </div>
          </div>
        </header>

        <main className="main"> {/* Fixed className */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Product />} /> {/* Assuming Product is the correct component */}
            <Route path="orders" element={<Orders />}></Route>
            <Route path="/order/:id" element={<OrderDetail />}></Route>
            <Route path="payment" element={<Payment />}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
