import { useRef, useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import styled from "styled-components";
import { faqs } from "../data/faqs";
import Heading from "../ui/Heading";

const FaqContainer = styled.div`
  min-width: 300px;
  margin: 2rem auto;
  font-weight: 600;
`;

const QuestionWrapper = styled.div`
  background-color: var(--color-grey-800);
  border: 2px solid var(--color-grey-700);
  border-radius: 12px;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const Question = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})`
  padding: 1.5rem 3rem;
  font-size: 1.8rem;
  letter-spacing: 0.5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: var(--color-grey-800);

  &:hover {
    background-color: var(--color-grey-700);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(90deg)")};
    transition: all 0.5s ease-in-out;
  }
`;

const AnswerWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})`
  height: ${({ isOpen, height }) => (isOpen ? `${height}px` : "0")};
  overflow: hidden;
  transition: height 0.3s ease-in-out;
`;

const Answer = styled.div`
  padding: 1.5rem 3rem;
  font-size: 1.8;
  color: var(--color-grey-300);
  background-color: var(--color-grey-900);
  letter-spacing: 0.5px;
`;

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleFaq = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <Heading as="h1">Frequently Asked Questions</Heading>
      <FaqContainer>
        {faqs.map((faq, index) => (
          <QuestionWrapper key={index}>
            <Question
              isOpen={openIndex === index}
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
              {openIndex === index ? <IoMdClose /> : <IoMdAdd />}
            </Question>
            <AnswerWrapper
              isOpen={openIndex === index}
              height={answerRefs.current[index]?.scrollHeight || 0}
            >
              <Answer ref={(el) => (answerRefs.current[index] = el)}>
                {faq.answer}
              </Answer>
            </AnswerWrapper>
          </QuestionWrapper>
        ))}
      </FaqContainer>
    </>
  );
};

export default Faq;
