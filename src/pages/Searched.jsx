import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import recipes from "../data/recipes.json"; 

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const { search } = useParams();

  useEffect(() => {
    // Filter recipes based on the search 
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchedRecipes(filteredRecipes);
  }, [search]);

  const toggleFavorite = (id) => {
    setSearchedRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
      )
    );
  };

  return (
    <Grid>
      {searchedRecipes.map((recipe) => (
        <Card key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>
            <h2>{recipe.name}</h2>
          </Link>
          <p>Cooking Time: {recipe.cookingTime}</p>
          <p>Type: {recipe.type}</p>
          <FontAwesomeIcon
            icon={recipe.favorite ? solidStar : regularStar}
            onClick={() => toggleFavorite(recipe.id)}
            style={{
              color: recipe.favorite ? "gold" : "grey",
              cursor: "pointer",
            }}
          />
        </Card>
      ))}
    </Grid>
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
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
