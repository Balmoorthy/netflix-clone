import { IoMdClose } from "react-icons/io";
import styled from "styled-components";
import Heading from "./Heading.jsx";

const StyledFaqContainer = styled.div`
  width: 100%;

  &:first-child {
    margin-bottom: 1rem;
  }
`;
const StyledUl = styled.li`
  width: 100%;
  background-color: var(--color-grey-800);
  border-radius: 16px;
  border: 2px solid var(--color-grey-700);
  padding: 2rem 3rem;
  font-size: 2rem;
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: var(--color-grey-700);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    transform: rotate(44deg);
    transition: all 0.5s ease-in-out;

    &:active {
      transform: rotate(88deg);
    }
  }
`;

function Faq() {
  //   console.log(quiz, question, answer);
  return (
    <StyledFaqContainer>
      <Heading as="h1">Frequently Asked Questions</Heading>

      <StyledUl>
        fdfdffdffd <IoMdClose />
      </StyledUl>
    </StyledFaqContainer>
  );
}

export default Faq;
