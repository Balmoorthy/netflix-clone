import styled from "styled-components";

const StyledSideBar = styled.aside`
  background-color: var(--color-grey-850);
  border-right: 1px solid var(--color-grey-800);
  box-shadow: var(--shadow-md);
  padding: 3.2rem 2.4rem;
  grid-row: 1 / -1;
`;

function SideBar() {
  return <StyledSideBar>Side bar</StyledSideBar>;
}

export default SideBar;
