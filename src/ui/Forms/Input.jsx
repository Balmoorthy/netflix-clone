import styled from "styled-components";

const Input = styled.input`
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  font-size: 1.5rem;
  font-family: inherit;
  color: var(--color-grey-100);
  padding: 1.5rem 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-bottom: 3px solid transparent;
  width: 100%;
  display: block;
  transition: all 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid var(--color-grey-100);
  }

  &:focus:invalid {
    border-bottom: 3px solid var(--color-red-300);
  }

  &::-webkit-input-placeholder {
    color: var(--color-grey-300);
  }

  &__label {
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 2rem;
    margin-top: 0.7rem;
    display: block;
    transition: all 0.3s;
  }

  &:placeholder-shown + &__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
`;

export default Input;
