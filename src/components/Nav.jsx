import React from "react";
import { Link } from "react-router-dom";

//
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>

      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

// TODO styled components

const StyledNav = styled.nav`
  min-height: 10vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  box-shadow: 0 0 15px rgb(0 0 0 / 0.25);

  a {
    font-size: 1.2rem;
    font-weight: 700;
    color: white;
    text-decoration: none;
  }

  #logo {
    /* font-weight: bold; */
    color: white;
    font-size: 1.5rem;
    font-family: "BioRhyme", serif;
    letter-spacing: 0.1rem;
  }

  ul {
    list-style: none;
    display: flex;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }
`;
export default Nav;
