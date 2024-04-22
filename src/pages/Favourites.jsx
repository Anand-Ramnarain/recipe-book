import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data/recipes.json";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";

function Favorites({ toggleFavorite }) {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const [favoritedRecipes, setFavoritedRecipes] = useState([]);

  useEffect(() => {
    const favoritedRecipesData = recipesData.filter((recipe) =>
      favorites.includes(recipe.id)
    );
    setFavoritedRecipes(favoritedRecipesData);
  }, [favorites]);

  const handleToggleFavorite = (recipeId) => {
    const updatedFavorites = favorites.includes(recipeId)
      ? favorites.filter((fav) => fav !== recipeId)
      : [...favorites, recipeId];
    setFavorites(updatedFavorites);
    toggleFavorite(recipeId); // Prop function to toggle favorite 
  };

  return (
    <div>
      <h1>Favorited Recipes</h1>
      <Grid>
        {favoritedRecipes.map((recipe) => (
          <Card key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <h2>{recipe.name}</h2>
            </Link>
            <p>Cooking Time: {recipe.cookingTime}</p>
            <p>Type: {recipe.type}</p>
            <StarIcon
              icon={solidStar}
              onClick={() => handleToggleFavorite(recipe.id)}
              isFavorite={true}
            />
          </Card>
        ))}
      </Grid>
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  a {
    text-decoration: none;
  }
`;

const StarIcon = styled(FontAwesomeIcon)`
  color: ${(props) => (props.isFavorite ? "gold" : "grey")};
  cursor: pointer;
`;

export default Favorites;
