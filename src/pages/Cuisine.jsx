import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import recipesData from "../data/recipes.json";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

function Cuisine({ toggleFavorite }) {
  const [cuisine, setCuisine] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const { type } = useParams(); // this get cuisine type from URL params

  useEffect(() => {
    // Filter recipes based on the cuisine type
    const filteredRecipes = recipesData.filter((recipe) =>
      recipe.dietaryRestrictions.includes(type)
    );
    setCuisine(filteredRecipes);
  }, [type]);

  const handleToggleFavorite = (recipeId) => {
    const updatedFavorites = favorites.includes(recipeId)
      ? favorites.filter((fav) => fav !== recipeId)
      : [...favorites, recipeId];
    setFavorites(updatedFavorites);
    toggleFavorite(recipeId); // Prop function to toggle favorite 
  };

  return (
    <div>
      <h1>{type} Cuisine</h1>
      <Grid>
        {cuisine.map((recipe) => (
          <Card key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <h2>{recipe.name}</h2>
            </Link>
            <p>Cooking Time: {recipe.cookingTime}</p>
            <p>Type: {recipe.type}</p>
            <StarIcon
              icon={favorites.includes(recipe.id) ? solidStar : regularStar}
              onClick={() => handleToggleFavorite(recipe.id)}
              isFavorite={favorites.includes(recipe.id)}
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

export default Cuisine;
