import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Cuisine from "./pages/Cuisine";
import OtherComponent from "./components/OtherComponent";
import recipesData from "./data/recipes.json";
import filterRecipes from "./components/filterRecipes";
import useToggleFavorite from "./components/useToggleFavorite";
import Cat from "./components/Cat"; 
import Search from "./components/Search";
import Searched from "./pages/Searched";
import Recipes from "./pages/Recipes";
import Favorites from "./pages/Favourites";

const App = () => {
  // State for recipes, filters, and favorites.
  const [recipes, setRecipes] = useState(
    recipesData.map((recipe) => ({ ...recipe, isFavorite: false }))
  );
  const [filters, setFilters] = useState([]);
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [favorites, toggleFavorite] = useToggleFavorite();

  // Effect to update recipes when favorites change.This take the and adds it to favourites through the id
  useEffect(() => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) => ({
        ...recipe,
        isFavorite: favorites.includes(recipe.id),
      }))
    );
  }, [favorites]);

  // Function to apply filters.
  const applyFilter = (filter) => {
    if (filter === activeFilter) {
      return;
    }

    setActiveFilter(filter);
    if (filter === "All") {
      setFilters([]);
      setFavoritesOnly(false);
    } else if (filter === "Favorites") {
      setFavoritesOnly(true);
      setFilters([]);
    } else {
      setFavoritesOnly(false);
      setFilters([filter]);
    }
  };

  // Filtered recipes based on current filters and favorites.
  const filteredRecipes = filterRecipes(recipes, filters, favoritesOnly);

  return (
    <Router>
      <div>
        <Navbar applyFilter={applyFilter} />
        <Search />
        <Cat />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                recipes={filteredRecipes}
                toggleFavorite={toggleFavorite}
                favorites={favorites}
              />
            }
          />
          <Route
            path="/cuisine/:type"
            element={<Cuisine toggleFavorite={toggleFavorite} />}
          />
          <Route
            path="/other-component"
            element={<OtherComponent toggleFavorite={toggleFavorite} />}
          />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipes/:id" element={<Recipes />} />
          <Route
            path="/Favourites"
            element={<Favorites toggleFavorite={toggleFavorite} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
