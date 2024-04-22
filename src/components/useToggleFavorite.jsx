import { useState, useEffect } from "react";

// State for favorites. Gets all favourited recipes from the localstorage
const useToggleFavorite = () => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  //Function to toggle favorite status.
  const toggleFavorite = (recipeId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(recipeId)) {
        return prevFavorites.filter((fav) => fav !== recipeId);
      } else {
        return [...prevFavorites, recipeId];
      }
    });
  };
 // Effect to update local storage when favorites change, so it updates the favourite if one is removed or added
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return [favorites, toggleFavorite];
};

export default useToggleFavorite;
