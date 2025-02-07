import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AddEditItems from "./AddEditItems/AddEditItems";
import DisplayItems from "./DisplayItems/DisplayItems";
import RecipePage from "./RecipePage/RecipePage";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/getitem" element={<DisplayItems />} />
        <Route path="/edititem" element={<AddEditItems />} />
        <Route path="/recipe" element={<RecipePage />} />
        <Route path="*" element={<DisplayItems />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
