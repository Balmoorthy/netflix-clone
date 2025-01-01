import PropTypes from "prop-types";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import styled, { keyframes } from "styled-components";
import { slidesData } from "../../data/slidesData";
import NavigationButton from "./NavigationButton";

const slideAnimation = keyframes`
  0% {
    transform: translateX(4rem);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  background: rgba(249, 146, 151, 0.2);
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px 20px 16px 16px;
`;

const ImageContainer = styled.div`
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  border-radius: 20px 20px 16px 16px;
  background: radial-gradient(at top left, white 25%, transparent 70%);

  & > img {
    position: absolute;
    flex-shrink: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    animation: ${slideAnimation} 0.5s ease-in-out;
  }
`;

function CarouselWrapper({ currentIndex, changeSlide }) {
  return (
    <Wrapper>
      <ImageContainer>
        <span></span>
        {slidesData.map((data, index) =>
          index === currentIndex ? (
            <img
              key={index}
              src={data.image}
              alt={`Slide ${index + 1}`}
              className={index === currentIndex ? "active" : ""}
            />
          ) : null
        )}
      </ImageContainer>
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
