import React from "react";
import Recipe from "./Recipe";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

//Handles favourite.
// Here i use splide to create a carosel effet so you can drag on the card to see them
const RecipeList = ({ recipes, toggleFavorite, favorites }) => {
  return (
    <Wrapper>
      <h1>Recipes</h1>
      <Splide
        options={{
          perPage: 4, //So 4 cards can be seen at a time
          pagination: false,
          drag: 'free',
          gap: '5rem',
        }}
      >
        {recipes.map((recipe) => (
          <SplideSlide key={recipe.id}> {/* Use recipe id as key */}
            <Recipe
              recipe={recipe}
              toggleFavorite={toggleFavorite}
              isFavorite={favorites.includes(recipe.id)}
            />
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

export default RecipeList;
