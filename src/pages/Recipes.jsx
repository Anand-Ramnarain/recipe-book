import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import recipesData from "../data/recipes.json"; 

function Recipes() {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("method");

  useEffect(() => {
    // Find the recipe with the matching ID from the JSON data
    const selectedRecipe = recipesData.find(
      (recipe) => recipe.id === parseInt(id)
    );
    if (selectedRecipe) {
      setDetails(selectedRecipe);
    }
  }, [id]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.name}</h2>
      </div>
      <Info>
        <Button
          className={activeTab === "method" ? "active" : ""}
          onClick={() => setActiveTab("method")}
        >
          Method
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "method" && (
          <div>
            <h3>{details.method}</h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipes;
