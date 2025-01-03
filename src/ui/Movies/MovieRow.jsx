import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IMAGE_BASE_URL } from "../../utils/constants";
import Heading from "../Heading";

const StyledMovieRow = styled.div`
  width: 100%;
  overflow: hidden; /* Hide overflowing content */
  position: relative;
  margin-bottom: 2.4rem;

  & > h2 {
    margin-left: 4rem;
    color: var(--color-grey-400);
    font-size: 3rem;
  }
`;

const StyledSlider = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  margin-left: 2rem;
  scroll-behavior: smooth; /* Smooth scrolling for the slider */
  padding: 1.5rem 5rem 1.5rem 1.5rem;
  min-width: 100%;

  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for a clean look */
  }
`;

const StyledMoviePoster = styled.div`
  flex: 0 0 auto; /* Prevent flexbox from shrinking items */
  width: 15rem;
  height: 21rem;
  overflow: hidden;
  cursor: pointer;
  border-radius: 10px;
  transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;

  &:hover {
    transform: scale(1.07);
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
  transform: translateY(-20%);
  background-color: var(--color-grey-700);
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  z-index: 15;
  font-size: 2.5rem;

  &:hover {
    background-color: var(--color-grey-800);
  }
`;

const PrevButton = styled(Button)`
  left: 5px;
`;

const NextButton = styled(Button)`
  right: 5px;
`;

function MovieRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const sliderRef = useRef(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    const handleInitialButtonVisibility = () => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        setIsAtStart(scrollLeft <= 0);
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
      }
    };

    // Call the function to set initial button states
    // handleInitialButtonVisibility();

    const slider = sliderRef.current;

    if (slider) {
      // Add scroll event listener for dynamic updates
      slider.addEventListener("scroll", handleInitialButtonVisibility);
    }

    return () => {
      if (slider) {
        slider.removeEventListener("scroll", handleInitialButtonVisibility);
      }
    };
  }, [sliderRef]);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "next" ? 1300 : -1300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleMovie = (movieId) => {
    navigate(`/movie/${movieId}`); // Navigate to the movie's detail page
  };

  return (
    <StyledMovieRow>
      <Heading as="h2">{title}</Heading>
      {!isAtStart && (
        <PrevButton onClick={() => handleScroll("prev")}>&lsaquo;</PrevButton>
      )}

      {!isAtEnd && (
        <NextButton onClick={() => handleScroll("next")}>&rsaquo;</NextButton>
      )}

      <StyledSlider ref={sliderRef}>
        {movies.map((movie) => (
          <StyledMoviePoster
            onClick={() => handleMovie(movie.id)}
            key={movie.id}
          >
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
