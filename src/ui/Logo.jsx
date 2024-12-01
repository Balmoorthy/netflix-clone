import styled from "styled-components";

const StyledLogo = styled.img`
  width: auto;
  height: 3.2rem;
  object-fit: cover;
`;

function Logo() {
  return <StyledLogo src="netflix-3.svg" alt="Logo" />;
}

export default Logo;
