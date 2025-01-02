import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { slidesData } from "../../data/slidesData";

const slideAnimation = keyframes`
  0% {
    transform: translateX(4rem);
    opacity: 0.7;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  transition: transform 0.5s ease-in-out;
  border-radius: 20px 20px 16px 16px;
  background: radial-gradient(at top left, white 25%, transparent 70%);
  transform: scale(1.1);
  pointer-events: none;

  & > img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    animation: ${slideAnimation} 0.5s ease-in-out;
  }

  & > div {
    position: absolute;
    width: 80rem;
    bottom: 12rem;
    left: 12rem;
    z-index: 100;
    color: #fff;
    animation: ${slideAnimation} 0.5s ease-in-out;

    & > h1 {
      font-size: 6.4rem;
      font-weight: 900;
      line-height: 1;
      margin-bottom: 10px;
      letter-spacing: -1px;
    }

    & > p {
      font-size: 1.8rem;
    }
  }
`;

function CarouselImage({ currentIndex }) {
  return (
    <ImageContainer>
      {/* Filter dark */}
      <span></span>
      {slidesData.map((data, index) =>
        index === currentIndex ? (
          <>
            <img
              key={index}
              src={data.image}
              alt={`Slide ${index + 1}`}
              className={index === currentIndex ? "active" : ""}
            />
            <div>
              <h1>{data.title}</h1>
              <p>{data.description}</p>
            </div>
          </>
        ) : null
      )}
    </ImageContainer>
  );
}

export default CarouselImage;

CarouselImage.propTypes = {
  currentIndex: PropTypes.number,
};
