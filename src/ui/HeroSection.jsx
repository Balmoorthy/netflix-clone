import { useCallback, useEffect, useRef, useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { IoIosPause } from "react-icons/io";
import { IoPlay } from "react-icons/io5";
import styled, { keyframes } from "styled-components";
import { slidesData } from "../data/slidesData";

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

const OuterContainer = styled.div`
  width: calc(100vw - 6rem);
  height: 772px;
  padding: 0 6rem;
`;

const InnerContainer = styled.div`
  filter: drop-shadow(24px 32px 24px rgba(0, 0, 0, 0.6));
  position: relative;
  height: 100%;
`;

const ImgOuterContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;
  width: 100%;
  height: 100%;
  filter: drop-shadow(24px 32px 24px rgba(0, 0, 0, 0.6));
  mask-image: radial-gradient(
    103% 10.5% at 50% 102%,
    transparent 50%,
    white 52%
  );
  border-radius: 20px 20px 16px 16px;

  &::before {
    position: absolute;
    content: "";
    inset: 0;
    padding: 2px;
    z-index: 100;
    background: radial-gradient(at top left, white 25%, transparent 70%);
    mask-composite: exclude;
    pointer-events: none;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    z-index: 1;
    border-radius: 20px 20px 16px 16px;
  }
`;

const ImgInnerContainer = styled.div`
  inset: 2px;
  z-index: 2;
  position: absolute;
  height: 100%;

  & span {
    background-image: radial-gradient(
      92.05% 69.94% at 76.34% 50.09%,
      rgba(0, 0, 0, 0) 21.7%,
      rgba(0, 0, 0, 0.8) 53.83%,
      rgba(0, 0, 0, 0.95) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
`;

const ImgContainer = styled.div`
  mask-image: linear-gradient(
    180deg,
    #fff 71.48%,
    rgba(255, 255, 255, 0.4) 100%
  );
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  border-radius: 20px 20px 16px 16px;
`;

const CarouselWrapper = styled.div`
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

const Controls = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  top: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  z-index: 5;
`;

const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25%;
  gap: 6px;
`;

const ProgressBar = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "currentIndex",
})`
  flex: 1;
  height: 5px;

  background: var(--color-grey-400);
  position: relative;
  cursor: pointer;
  border-radius: var(--border-radius-md);
  transition: height, background, transform 0.5s linear;

  .progress {
    height: 100%;
    background: var(--color-grey-200);
    transition: width 0.1s linear;
    border-radius: var(--border-radius-md);
  }

  &:hover {
    transform: scale(1.05);
    background: var(--color-grey-300);
  }

  &:active {
    background-color: var(--color-grey-400);
  }
`;

const PlayPauseButton = styled.button`
  border: none;
  padding: 0.25rem;
  cursor: pointer;
  background: none;
  outline-offset: none;

  &:active {
    outline-offset: none;
  }
`;

const NavigationButton = styled.button`
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

const Carousel = ({ onImageChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progressBars, setProgressBars] = useState(
    Array(images.length).fill(0)
  );
  const intervalRef = useRef(null);
  const progressRefs = useRef([]);

  const DURATION = 4000; // 5 seconds for each slide

  const changeSlide = useCallback(
    (direction) => {
      setProgressBars((prev) => {
        const updated = [...prev];
        updated[currentIndex] = 0;
        return updated;
      });

      setCurrentIndex((prevIndex) => {
        const nextIndex =
          (prevIndex + direction + images.length) % images.length;
        onImageChange(nextIndex, slidesData[nextIndex].image);

        return nextIndex;
      });

      if (isPlaying) {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
          changeSlide(1);
        }, DURATION);
      }
    },
    [currentIndex, isPlaying, onImageChange]
  );

  useEffect(() => {
    const localProgressRefs = progressRefs.current;
    if (isPlaying) {
      startProgress(currentIndex);
      intervalRef.current = setInterval(() => {
        changeSlide(1);
      }, DURATION);
    } else {
      clearInterval(intervalRef.current);
      progressRefs.current.forEach(clearInterval);
    }

    return () => {
      clearInterval(intervalRef.current);
      localProgressRefs.forEach(clearInterval);
    };
  }, [isPlaying, currentIndex, changeSlide]);

  const startProgress = (index) => {
    clearInterval(progressRefs.current[index]);
    progressRefs.current[index] = setInterval(() => {
      setProgressBars((prev) => {
        const updated = [...prev];
        updated[index] += 100 / (DURATION / 100);
        if (updated[index] >= 100) clearInterval(progressRefs.current[index]);
        return updated;
      });
    }, 100);
  };

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleProgressBarClick = (index) => {
    setProgressBars((prev) => {
      const updated = [...prev];
      updated[currentIndex] = 0;
      return updated;
    });
    setCurrentIndex(index);
    onImageChange(index, slidesData[index].image);
    setIsPlaying(false);

    if (isPlaying) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        changeSlide(index - currentIndex);
      }, DURATION);
    }
  };

  return (
    <OuterContainer>
      <InnerContainer>
        <ImgOuterContainer>
          <ImgInnerContainer>
            <ImgContainer>
              <CarouselWrapper key={currentIndex} currentIndex={currentIndex}>
                <ImageContainer key={currentIndex} currentIndex={currentIndex}>
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
                <NavigationButton
                  className="left"
                  onClick={() => changeSlide(-1)}
                >
                  <GoChevronLeft />
                </NavigationButton>
                <NavigationButton
                  className="right"
                  onClick={() => changeSlide(1)}
                >
                  <GoChevronRight />
                </NavigationButton>
              </CarouselWrapper>
            </ImgContainer>
          </ImgInnerContainer>
        </ImgOuterContainer>
        <Controls>
          <PlayPauseButton onClick={handlePlayPause}>
            {isPlaying ? <IoIosPause /> : <IoPlay />}
          </PlayPauseButton>
          <ProgressBarContainer>
            {images.map((_, index) => (
              <ProgressBar
                currentIndex={index}
                key={index}
                onClick={() => handleProgressBarClick(index)}
              >
                <div
                  className="progress"
                  style={{ width: `${progressBars[index]}%` }}
                ></div>
              </ProgressBar>
            ))}
          </ProgressBarContainer>
        </Controls>
      </InnerContainer>
    </OuterContainer>
  );
};

export default Carousel;
