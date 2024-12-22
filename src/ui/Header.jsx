import styled from "styled-components";
import Button from "./Button";
import DarkModeToggle from "./DarkModeToggle";
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
  console.log(import.meta.env.API_KEY_FIRE_BASE);
  console.log(import.meta.env.BALA);
  console.log(import.meta.env);
  const apiKey = "AIzaSyA4CMHSuINAb";
  console.log(apiKey);

  return (
    <StyledHeader>
      <Logo />
      <SearchBar />
      <DarkModeToggle />
      <Button variation="secondary" size="small">
        Sign out
      </Button>
    </StyledHeader>
  );
}

export default Header;
