import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--color-grey-600);
  color: var(--color-grey-50);
  border: none;
  width: 2.4rem;
  height: 8rem;
  border-radius: 16rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  z-index: 5;

  & svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background: var(--color-grey-800);
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;

function NavigationButton({ direction, onClick, children }) {
  return (
    <Button className={direction} onClick={onClick}>
      {children}
    </Button>
  );
}

export default NavigationButton;

NavigationButton.propTypes = {
  direction: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
