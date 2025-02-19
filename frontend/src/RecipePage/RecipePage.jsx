import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RecipePage.css"; // Optional: Style for your page

const RecipePage = () => {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setIsLoading(true);
        // Send request to backend to fetch recipe based on expiring items
        const response = await axios.post("http://localhost:5000/getRecipe");
        console.log(response);
        setRecipe(response.data.recipe); // ✅ Updated: Now matches the backend response field
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipe();
  }, []); // Empty dependency array ensures this runs once when component mounts

  return (
    <div className="recipe-page">
      <h1>Recipe Suggestions</h1>
      {isLoading ? (
        <p>Loading recipe...</p>
      ) : recipe ? (
        <div className="recipe-container">
          <h2>Suggested Recipe:</h2>
          <p>{recipe}</p> {/* ✅ Displays the recipe returned from Ollama */}
        </div>
      ) : (
        <p>No recipe found for the selected items.</p>
      )}
    </div>
  );
};

export default RecipePage;
