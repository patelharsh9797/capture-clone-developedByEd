import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// TODO framer motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

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
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>DREAMS</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <LinkButton to="/contact" className="btn" variants={fade}>
          Contact Us
        </LinkButton>
      </Description>

      <Image>
        <motion.img
          variants={photoAnim}
          src={home1}
          alt="A Guy with A Camera"
        />
      </Image>

      <Wave />
    </About>
  );
};

// TODO styled components

const LinkButton = styled(motion(Link))`
  display: inline-block;
  margin: 2rem 0 5rem 0;
`;
export default AboutSection;
