import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();// Function to navigate to a different route

  const handleChange = (e) => {
    setInput(e.target.value); // this get the value that is in the search bar to be used
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);//this navigate to the searched route. using the inpput value to search all recipes
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <SearchWrapper>
        <FaSearch />
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search..."
        />
      </SearchWrapper>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem 20rem;
  margin-top: 10%;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
  input {
    width: 100%;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    font-size: 1.5rem;
    color: white;
    background: linear-gradient(35deg, #494949, #313131);
    outline: none;
  }
`;

export default Search;
