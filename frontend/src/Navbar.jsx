import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Navbar.css";

const Navbar = () => {
  const [expiringItems, setExpiringItems] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Fetch expiring items from the backend
    const fetchExpiringItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getExpiringItems"); // Update with your backend route
        // Update expiringItems to extract both itemName and dateOfExpiration
        if (response.data && response.data.length) {
          const items = response.data.map(item => `${item.itemName}`);
          setExpiringItems(items);
        }
      } catch (error) {
        console.error("Error fetching expiring items:", error);
      }
    };

    fetchExpiringItems();
  }, []);

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
        {/* Bell Icon */}
        <div
          className="bell-container"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <Link to="/recipe">
            <i className={`fas fa-bell bell-icon ${expiringItems.length > 0 ? 'red' : ''}`}></i>
          </Link>
          {showTooltip && expiringItems.length > 0 && (
            <div className="tooltip">
              <p>Hey! {expiringItems.join(', ')} is expiring soon.</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
