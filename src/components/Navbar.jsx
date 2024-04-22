import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = ({ applyFilter }) => {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);

  useEffect(() => {
    // Function to handle scroll event and update navbar transparency so the navbar is transparent at the top and solid when scrolling down
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsNavbarTransparent(scrolled <= 20); // Set navbar background to transparent if at the top or to black if scrolled down
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavWrapper transparent={isNavbarTransparent}>
      <LogoLink to="/">MY RECIPES</LogoLink> 
      <ButtonSearchWrapper>
        <ButtonWrapper>
          <LogoLink to="/">All</LogoLink> {/* Link to show all recipes */}
        </ButtonWrapper>
      </ButtonSearchWrapper>
    </NavWrapper>
  );
};

// Styled component
const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, ${props => (props.transparent ? '0.5' : '1')}); /* Transparent black or fully black */
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;

  /* Additional class for transparent background */
  &.transparent {
    background-color: rgba(0, 0, 0, 0.5); /* Transparent black background */
  }
`;

const LogoLink = styled(Link)`
  color: #fff; /* White color for logo */
  font-size: 1.5rem;
  text-decoration: none;
`;

const ButtonSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default Navbar;
