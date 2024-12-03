import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { IMAGE_BASE_URL } from "../utils/constants";
import Heading from "./Heading";

const StyledMovieRow = styled.div`
  width: 100%;
  height: auto; // Allow it to grow with its content

  /* background-color: var(--color-grey-400); */
  overflow-x: auto;
  display: flex;
  gap: 1rem;

  align-items: center;
`;

const StyledMoviePoster = styled.div`
  height: 21rem;
  width: 15rem;
  transition: all 0.5s ease-in-out;
  border-radius: 5px;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function MovieRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        setMovies(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, [fetchUrl]);

  return (
    <>
      <Heading as="h2">{title}</Heading>
      <StyledMovieRow>
        {movies.map((movie) => (
          <StyledMoviePoster key={movie.id}>
            <StyledImg
              src={`${IMAGE_BASE_URL}${movie.poster_path}`}
              alt={movie.title || movie.name}
            />
          </StyledMoviePoster>
        ))}
      </StyledMovieRow>
    </>
  );
}

MovieRow.propTypes = {
  fetchUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieRow;
