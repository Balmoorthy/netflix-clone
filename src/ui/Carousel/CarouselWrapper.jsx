import PropTypes from "prop-types";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import styled from "styled-components";
import CarouselImage from "./CarouselImage";
import NavigationButton from "./NavigationButton";

const Wrapper = styled.div`
  background: rgba(249, 146, 151, 0.2);
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px 20px 16px 16px;
`;

function CarouselWrapper({ currentIndex, changeSlide }) {
  return (
    <Wrapper>
      <CarouselImage currentIndex={currentIndex} />
      <NavigationButton direction="left" onClick={() => changeSlide(-1)}>
        <GoChevronLeft />
      </NavigationButton>
      <NavigationButton direction="right" onClick={() => changeSlide(1)}>
        <GoChevronRight />
      </NavigationButton>
    </Wrapper>
  );
}

export default CarouselWrapper;

CarouselWrapper.propTypes = {
  currentIndex: PropTypes.number,
  changeSlide: PropTypes.func,
};
