import React from "react";
// import styled from "styled-components";
// TODO framer motion
import { motion } from "framer-motion";

// TODO Importing Styled components from 'style.jsx'
import { About, Description, Image, Hide } from "../style";

// TODO Importing Images
import home1 from "../img/home1.png";

// TODO: Main AboutSection
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>DREAMS</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>

      <Image>
        <img src={home1} alt="A Guy with A Camera" />
      </Image>
    </About>
  );
};

// TODO styled components

export default AboutSection;
