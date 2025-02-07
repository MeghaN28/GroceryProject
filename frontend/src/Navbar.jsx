import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          Grocery App
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <Link to="/getitem">View Item</Link>
          </li>
          <li>
            <Link to="/edititem">Edit Item</Link>
          </li>
          <li>
            <Link to="/recipe">Alert & Recipe</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <Link to="/cart" className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">0</span>
        </Link>
        <Link to="/account" className="user-icon">
          <i className="fas fa-user"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
