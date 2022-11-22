import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { useNavigate, useLocation } from "react-router-dom";
import { MovieState } from "../movieState";

// TODO Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

// TODO
const MovieDetail = () => {
  // const navigate = useNavigate();
  const url = location.pathname;

  //   useStates
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //   useEffect
  useEffect(() => {
    const currentMovie = movies.filter((setMovie) => setMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="secondaryImg" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

// styled component

const Details = styled(motion.div)`
  /* padding: 5rem 10rem; */
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  isolation: isolate;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    object-position: center;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5rem 10rem;
`;

const AwardStyled = styled.div`
  padding: 5rem;

  h3 {
    font-size: 2rem;
  }

  .line {
    width: 100%;
    height: 0.5rem;
    margin: 1rem 0;
    background: #42bea4;
  }
  p {
    padding: 2rem 0;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

// TODO Award component

const Award = ({ title, description }) => {
  return (
    <AwardStyled>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyled>
  );
};

export default MovieDetail;
