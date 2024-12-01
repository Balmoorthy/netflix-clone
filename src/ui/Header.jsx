import styled from "styled-components";
import Button from "./Button";
import Logo from "./Logo";
import SearchMovies from "./SearchMovies";

const StyledHeader = styled.header`
  background-color: var(--color-grey-900);
  display: flex;
  width: 100%;
  padding: 2rem;
  gap: 2rem;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <SearchMovies />
      <Button variations="primary" size="small">
        Sign out
      </Button>
    </StyledHeader>
  );
}

export default Header;
