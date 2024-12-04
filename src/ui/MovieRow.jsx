import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IMAGE_BASE_URL } from "../utils/constants";
import Heading from "./Heading";

const StyledMovieRow = styled.div`
  width: 100%;
  overflow: hidden; /* Hide overflowing content */
  position: relative; /* For positioning buttons */
`;

const StyledSlider = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-behavior: smooth; /* Smooth scrolling for the slider */
  padding: 1rem;

  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for a clean look */
  }
`;

const StyledMoviePoster = styled.div`
  flex: 0 0 auto; /* Prevent flexbox from shrinking items */
  width: 15rem;
  height: 21rem;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PrevButton = styled(Button)`
  left: 0;
`;

const NextButton = styled(Button)`
  right: 0;
`;

function MovieRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, [fetchUrl]);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "next" ? 1200 : -1200;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

      setTimeout(() => {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        setIsAtStart(scrollLeft <= 0);
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
      }, 300); // Delay for smooth scrolling
    }
  };

  return (
    <StyledMovieRow>
      <Heading as="h2">{title}</Heading>
      {!isAtStart && (
        <PrevButton onClick={() => handleScroll("prev")}>◀</PrevButton>
      )}

      {!isAtEnd && (
        <NextButton onClick={() => handleScroll("next")}>▶</NextButton>
      )}

      <StyledSlider ref={sliderRef}>
        {movies.map((movie) => (
          <StyledMoviePoster key={movie.id}>
            <StyledImg
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title || movie.name || "Movie poster"}
            />
          </StyledMoviePoster>
        ))}
      </StyledSlider>
    </StyledMovieRow>
  );
}

MovieRow.propTypes = {
  fetchUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieRow;
