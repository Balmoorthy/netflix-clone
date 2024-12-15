import PropTypes from "prop-types";
import { useRef } from "react";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import { useKey } from "../hooks/useKey";

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
  background-color: var(--color-grey-300);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: var(--border-radius-sm);
  color: var(--color-grey-950);
  gap: 0.5rem;
`;

function SearchBar({ query, setQuery }) {
  const inputEl = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;

    inputEl.current.focus();
    setQuery("");
  });

  return (
    <StyledBar>
      <StyledInput
        typeof="text"
        value={query}
        onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
        type="text"
        placeholder="Type / to search movies"
        ref={inputEl}
      />
      <FiSearch />
    </StyledBar>
  );
}

SearchBar.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.string,
};

export default SearchBar;
