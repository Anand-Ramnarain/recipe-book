import React from "react";

//Function to handle toggling favorite status.
function OtherComponent({ toggleFavorite }) {
  const handleToggleFavorite = () => {
    // Assuming you have a specific recipeId it will call the toggleFavorite function 
    const recipeId = "some_recipe_id";
    toggleFavorite(recipeId);
  };

  return (
    <div>
      <h1>Other Component</h1>
      <button onClick={handleToggleFavorite}>Toggle Favorite</button>
    </div>
  );
}

export default OtherComponent;
