import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

//
import styled from "styled-components";

const Nav = () => {
  const { pathname } = useLocation();
  console.log(pathname);
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
          <Line
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
            transition={{ duration: 0.75 }}
          />
        </li>
        <li>
          <Link to="/work">Our Work</Link>
          <Line
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "50%" : "0%" }}
            transition={{ duration: 0.75 }}
          />
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <Line
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
            transition={{ duration: 0.75 }}
          />
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
  position: sticky;
  top: 0;
  z-index: 10;

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
    li {
      /* text-align: center; */
      padding-left: 10rem;
      position: relative;
    }
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;

    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding-top: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.35rem;
  width: 0%;
  border-radius: 100vmax;
  background-color: #23d997;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0;
  }
`;

export default Nav;
