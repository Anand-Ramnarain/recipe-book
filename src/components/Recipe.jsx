import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

// function to handle favourites
const Recipe = ({ recipe, toggleFavorite, isFavorite }) => {
  const handleFavoriteToggle = () => {
    toggleFavorite(recipe.id);
  };
 // fetches and renders each recipe by the id and show all of it details. This is also so each recipe seems like its on it own card
  return (
    <Wrapper>
      <Card>
        <Link to={`/recipes/${recipe.id}`}>
          <h2>{recipe.name}</h2>
        </Link>
        <p>Dietary Restrictions: {recipe.dietaryRestrictions.join(", ")}</p>
        <p>Cooking Time: {recipe.cookingTime}</p>
        <p>Type: {recipe.type}</p>
        <FontAwesomeIcon
          icon={isFavorite ? solidStar : regularStar}
          onClick={handleFavoriteToggle}
          style={{ color: isFavorite ? "gold" : "grey", cursor: "pointer" }}
        />
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
`;

export default Recipe;
