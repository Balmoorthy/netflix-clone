import styled from "styled-components";
import { getTopRatedMovies } from "../services/api";
import Button from "./Button";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-900);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  gap: 2rem;
`;

function Header() {
  getTopRatedMovies();
  return (
    <StyledHeader>
      <Logo />
      <SearchBar />

      <Button variation="secondary" size="small">
        Sign out
      </Button>
    </StyledHeader>
  );
}

export default Header;
