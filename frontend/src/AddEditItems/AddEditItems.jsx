import React, { useState } from "react";
import axios from "axios";

function AddEditItems() {
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    quantity: "",
    dateOfPurchase: "",
    dateOfExpiration: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/addItem", formData);
      alert(response.data.message);
      setFormData({ itemName: "", category: "", quantity: "", dateOfPurchase: "", dateOfExpiration: "" });
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Failed to submit item");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", textAlign: "center" }}>
      <h2>Insert Item into Inventory</h2>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddEditItems;
