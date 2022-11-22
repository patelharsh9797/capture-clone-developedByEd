import React from "react";
import styled from "styled-components";

// TODO Importing Styled components from 'style.jsx'
import { About } from "../style";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>

      <div className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            voluptas!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            voluptas!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>Diferrent Payment Methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            voluptas!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>What Products do you offer.</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            voluptas!
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

// TODO styled components
const Faq = styled(About)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    width: 100%;
    background-color: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
  }

  .question {
    padding: 3rem 0;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;
export default FaqSection;