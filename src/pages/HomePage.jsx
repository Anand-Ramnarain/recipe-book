// pages/HomePage.js
import React from "react";
import RecipeList from "../components/RecipeList";

const HomePage = ({ recipes, toggleFavorite, favorites }) => {
  return (
    <div>
      <RecipeList
        recipes={recipes}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />
    </div>
  );
};

export default HomePage;
