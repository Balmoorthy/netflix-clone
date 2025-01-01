import { useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import { useKey } from "../../hooks/useKey";
import useMovies from "../../hooks/useMovies";
import { IMAGE_BASE_URL } from "../../utils/constants";

const StyledInput = styled.input`
  width: 30rem;
  height: 1.8rem;
  border: none;
  font-size: 2rem;
  padding: 1.5rem;
  transition: all 0.5s ease-in;
  background-color: var(--color-grey-300);

  /* &:placeholder-shown {
    color: var(--color-grey-400);
  } */

  &:focus {
    width: 48rem;
    outline: none;
    background-color: var(--color-grey-50);
    border: var(--border);
  }
`;

const StyledBar = styled.div`
  position: relative;
  background-color: var(--color-grey-300);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: var(--border-radius-sm);
  color: var(--color-grey-950);
  gap: 0.5rem;

  & ul {
    /* display: none; */
    position: absolute;
    /* padding: 2rem; */
    width: 100%;
    height: 85vh;
    display: flex;
    top: 4.5rem;
    background-color: var(--color-grey-300);
    color: var(--color-grey-950);
    z-index: 10;
    overflow-x: auto;
    /* flex-basis: 200px; */
    flex-wrap: wrap;

    & li {
      width: 20rem;
      height: 15rem;
      cursor: pointer;
      padding: 0.5rem 1rem;
      display: flex;
      flex-grow: 1;

      gap: 1rem;
      align-items: center;

      &:hover {
        background-color: var(--color-grey-500);
      }
    }

    & span {
      color: var(--color-grey-500);
    }

    & img {
      width: 8rem;
      /* height: 100%; */
    }
  }
`;

function SearchBar() {
  const [query, setQuery] = useState("");
  const { movies, error, isLoading } = useMovies(query);
  const inputEl = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;

    inputEl.current.focus();
    setQuery("");
  });

  return (
    <StyledBar>
      <>
        <StyledInput
          typeof="text"
          value={query}
          onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
          type="text"
          placeholder="Type / to search movies"
          ref={inputEl}
        />
        <FiSearch />
      </>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {query && (
        <ul>
          {movies?.map((movie) => (
            <li key={movie.id}>
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title || movie.name || "Movie poster"}
              />
              {movie.title}
              <span>{movie.release_date.split("-")[0]}</span>
              <span></span>
            </li>
          ))}
        </ul>
      )}
    </StyledBar>
  );
}

// SearchBar.propTypes = {
//   query: PropTypes.string,
//   setQuery: PropTypes.string,
// };

export default SearchBar;
