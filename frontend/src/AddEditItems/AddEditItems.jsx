import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function AddEditItems() {
  const { id } = useParams(); // Get the item ID from the URL if editing
  const location = useLocation(); // Get item data when editing
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    quantity: "",
    dateOfPurchase: "",
    dateOfExpiration: "",
  });

  useEffect(() => {
    if (location.state?.item) {
      setFormData(location.state.item);
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`http://localhost:5000/updateItem/${id}`, formData);
        alert("Item updated successfully!");
      } else {
        await axios.post("http://localhost:5000/addItem", formData);
        alert("Item added successfully!");
      }
      navigate("/getitem");
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Failed to submit item");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", textAlign: "center" }}>
      <h2>{id ? "Edit Item" : "Insert Item into Inventory"}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="itemName" placeholder="Item Name" value={formData.itemName} onChange={handleChange} required />
        <br />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
        <br />
        <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required />
        <br />
        <label>Date of Purchase:</label>
        <input type="date" name="dateOfPurchase" value={formData.dateOfPurchase} onChange={handleChange} required />
        <br />
        <label>Date of Expiration:</label>
        <input type="date" name="dateOfExpiration" value={formData.dateOfExpiration} onChange={handleChange} required />
        <br />
        <button type="submit">{id ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
}

export default AddEditItems;