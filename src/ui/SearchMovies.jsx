import styled from "styled-components";

const StyledSearchMovies = styled.input`
  width: 20rem;
  height: 100%;
`;

function SearchMovies() {
  return (
    <div>
      <StyledSearchMovies type="search" />
    </div>
  );
}

export default SearchMovies;
