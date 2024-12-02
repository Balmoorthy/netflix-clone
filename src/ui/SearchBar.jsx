import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 25rem;
  height: 1.8rem;
  border: none;
  font-size: 1rem;
  padding: 0.5rem;
  transition: all 0.5s ease-in;
  background-color: var(--color-grey-300);

  /* &:placeholder-shown {
    color: var(--color-grey-400);
  } */

  &:focus {
    width: 30rem;
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
  padding: 0.4rem 0.4rem;
  border-radius: var(--border-radius-sm);
  color: var(--color-grey-950);
  gap: 0.5rem;
`;

function SearchBar() {
  return (
    <StyledBar>
      <StyledInput type="text" placeholder="Type / to search movies" />
      <FiSearch />
    </StyledBar>
  );
}

export default SearchBar;
