import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/useAuth";
import Button from "./Button";
import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const StyledHeader = styled.header`
  /* background-color: var(--color-grey-900); */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  gap: 2rem;
`;

function Header() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  function handleSubmit() {
    navigate("/signup");
  }
  return (
    <StyledHeader>
      <Logo />
      {currentUser && <SearchBar />}
      <DarkModeToggle />
      <Button onClick={handleSubmit} variation="secondary" size="medium">
        Sign In
      </Button>
    </StyledHeader>
  );
}

export default Header;
