import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DisplayItems.css";
import { Link } from "react-router-dom";

function DisplayItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch the items from the backend
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getItems");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, []);

  const isExpired = (date) => {
    return new Date(date) < new Date(); // Expired if the date is before today
  };

  const isExpiringSoon = (date) => {
    const expirationDate = new Date(date);
    const today = new Date();
    const diffInDays = (expirationDate - today) / (1000 * 3600 * 24);
    return diffInDays <= 2 && diffInDays >= 0; // Expiring in the next 2 days
  };

  return (
    <div className="item-list-container">
      <div className="add-button-container">
        <Link to="/edititem">
          <button className="add-button">Add</button>
        </Link>
      </div>
      <table className="item-list-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Date of Purchase</th>
            <th>Date of Expiration</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: isExpired(item.dateOfExpiration)
                  ? "red"
                  : isExpiringSoon(item.dateOfExpiration)
                  ? "yellow"
                  : "transparent",
              }}
            >
              <td>{item.itemName}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
              <td>{item.dateOfPurchase}</td>
              <td>{item.dateOfExpiration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayItems;