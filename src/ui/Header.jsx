import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/useAuth";
import Button from "./Button";
import DarkModeToggle from "./DarkModeToggle";
import SearchBar from "./Forms/SearchBar";
import Logo from "./Logo";

const StyledHeader = styled.header`
  /* background-color: var(--color-grey-900); */
  width: calc(100vw - 6rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 100%; */
  padding: 1.5rem 4rem;
  gap: 2rem;
  margin: 0 auto;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
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
      <div>
        <DarkModeToggle />
        <Button onClick={handleSubmit} variation="secondary" size="medium">
          Sign In
        </Button>
      </div>
    </StyledHeader>
  );
}

export default Header;
