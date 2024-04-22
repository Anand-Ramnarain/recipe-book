import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { LuVegan } from "react-icons/lu"; 
import { BiSolidLeaf } from "react-icons/bi"; 
import { GiGreenhouse } from "react-icons/gi"; 
import { AiFillStar } from "react-icons/ai"; 
import { GiChickenLeg } from "react-icons/gi"; 

function Cat() {
  // This defines an array of categories to be used for the filters
  const categories = [
    { Icon: GiChickenLeg, label: "Poultry", to: "/cuisine/Poultry" }, 
    { Icon: LuVegan, label: "Vegan", to: "/cuisine/Vegan" }, 
    { Icon: BiSolidLeaf, label: "Vegetarian", to: "/cuisine/Vegetarian" },
    { Icon: GiGreenhouse, label: "Gluten-Free", to: "/cuisine/Gluten-Free" }, 
    { Icon: AiFillStar, label: "Favourites", to: "/Favourites" }, 
  ];

  return (
    <List>
      {/*This goes through the categories array */}
      {categories.map((category, index) => (
        <SLink key={index} to={category.to}>{/*Link to the catergory to help filter the recipes */}
          <category.Icon /> {/* Render category icon */}
          <h4>{category.label}</h4> {/* Render category label */}
        </SLink>
      ))}
    </List>
  );
}

// Styled component f
const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  position: relative;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-top: 4%;
  margin-right: 2rem;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  /* Active category styles */
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Cat;
