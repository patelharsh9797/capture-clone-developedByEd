import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// TODO Animations
import { motion } from "framer-motion";
import { pageAnimation } from "./animation";

// Importing Images
import athlete from "../img/athlete-small.png";
import tracer from "../img/theracer-small.png";
import goodTimes from "../img/goodtimes-small.png";

const OurWork = () => {
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="Boxing Athlete" />
        </Link>
      </Movie>

      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={tracer} alt="A Girl sitting on a Car" />
        </Link>
      </Movie>

      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={goodTimes} alt="A couple on a Beach" />
        </Link>
      </Movie>
    </Work>
  );
};

// TODO styled components

const Work = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  overflow: hidden;
  color: black;
  h2 {
    padding: 1rem 0;
  }

  .line {
    background-color: #42bea4;
    width: 100%;
    height: 0.5rem;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    object-position: center;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
`;
export default OurWork;
