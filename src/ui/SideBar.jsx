import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledSideBar = styled.aside`
  background-color: var(--color-grey-850);
  border-right: 1px solid var(--color-grey-500);
  box-shadow: var(--shadow-md);
  grid-row: 1 / -1;
  color: var(--color-grey-50);
  align-self: center;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-grey-400);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0.5rem;
    transition: all 0.3s;
  }
`;

const IconWrapper = styled.span`
  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-grey-50);
  }
`;

function SideBar() {
  return (
    <StyledSideBar>
      <nav>
        <NavList>
          <li>
            <StyledNavLink to="/dashboard">
              <IconWrapper>
                <FaHome />
              </IconWrapper>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/dashboard">
              <IconWrapper>
                <FaHome />
              </IconWrapper>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/dashboard">
              <IconWrapper>
                <FaHome />
              </IconWrapper>
            </StyledNavLink>
          </li>
        </NavList>
      </nav>
    </StyledSideBar>
  );
}

export default SideBar;
