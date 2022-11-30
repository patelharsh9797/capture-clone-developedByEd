import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// TODO Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";

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
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>

      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <HideImg>
            <motion.img
              variants={photoAnim}
              src={athlete}
              alt="Boxing Athlete"
            />
          </HideImg>
        </Link>
      </Movie>

      <Movie>
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <HideImg>
            <motion.img
              variants={photoAnim}
              src={tracer}
              alt="A Girl sitting on a Car"
            />
          </HideImg>
        </Link>
      </Movie>

      <Movie>
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <HideImg>
            <motion.img
              variants={photoAnim}
              src={goodTimes}
              alt="A couple on a Beach"
            />
          </HideImg>
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

const HideImg = styled.div`
  overflow: hidden;
`;

// Frame Animation while loading the work page
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background-color: #fffebf;
  z-index: 5;
`;

const Frame2 = styled(Frame1)`
  background-color: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background-color: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background-color: #8effa0;
`;
export default OurWork;
