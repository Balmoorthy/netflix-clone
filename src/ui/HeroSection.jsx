import { useCallback, useEffect, useRef, useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { IoIosPause } from "react-icons/io";
import { IoPlay } from "react-icons/io5";
import styled from "styled-components";

const images = [
  "home-slider/home-slide-img-1.jpg",
  "home-slider/home-slide-img-2.jpg",
  "home-slider/home-slide-img-3.jpg",
  "home-slider/home-slide-img-4.jpg",
  "home-slider/home-slide-img-5.jpg",
];

const CarouselWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "currentIndex",
})`
  position: relative;
  /* background: rgba(249, 146, 151, 0.2); */
  width: 100%;
  max-width: 120rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
  margin-bottom: 3.6rem;
  background: ${({ currentIndex }) =>
    currentIndex === 0
      ? "lightblue"
      : currentIndex === 1
      ? "lightgreen"
      : "lightcoral"};
`;

const StyledImgContainer = styled.div`
  mask-image: radial-gradient(
    103% 10.5% at 50% 102%,
    transparent 50%,
    white 52%
  );
  border-radius: 20px 20px 16px 16px;
  filter: drop-shadow(24px 32px 24px rgba(0, 0, 0, 0.6));

  &::before {
    position: absolute;
    content: "";
    inset: 0;
    padding: 2px;
    z-index: 1;
    background: radial-gradient(at top left, white 25%, transparent 70%);
    mask-composite: exclude;
    pointer-events: none;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    z-index: 100;
  }
`;

const ImageContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "currentIndex",
})`
  display: flex;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
  transition: transform 0.5s ease-in-out;
  inset: 1;
  z-index: 2;
  height: 100%;
  /* background: radial-gradient(at top left, white 25%, transparent 70%); */

  img {
    width: 100%;
    z-index: 300;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: drop-shadow(24px 32px 24px rgba(0, 0, 0, 0.6));
  }
`;

const Controls = styled.div`
  /* position: absolute; */
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  gap: 5px;
`;

const ProgressBar = styled.div`
  flex: 1;
  height: 5px;
  background: var(--color-grey-400);
  position: relative;
  cursor: pointer;
  border-radius: var(--border-radius-md);
  transition: height 0.5s linear;

  .progress {
    height: 100%;
    background: var(--color-grey-200);
    transition: width 0.1s linear;
    border-radius: var(--border-radius-md);
  }

  &:hover {
    height: 7px;
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

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progressBars, setProgressBars] = useState(
    Array(images.length).fill(0)
  );
  const intervalRef = useRef(null);
  const progressRefs = useRef([]);

  const DURATION = 5000; // 5 seconds for each slide

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
        return nextIndex;
      });

      if (isPlaying) {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
          changeSlide(1);
        }, DURATION);
      }
    },
    [currentIndex, isPlaying]
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
    setIsPlaying(false);

    if (isPlaying) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        changeSlide(1);
      }, DURATION);
    }
  };

  return (
    <CarouselWrapper currentIndex={currentIndex}>
      <StyledImgContainer currentIndex={currentIndex}>
        <ImageContainer currentIndex={currentIndex}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={index === currentIndex ? "active" : ""}
            />
          ))}
        </ImageContainer>
      </StyledImgContainer>

      <NavigationButton className="left" onClick={() => changeSlide(-1)}>
        <GoChevronLeft />
      </NavigationButton>
      <NavigationButton className="right" onClick={() => changeSlide(1)}>
        <GoChevronRight />
      </NavigationButton>
      <Controls>
        <PlayPauseButton onClick={handlePlayPause}>
          {isPlaying ? <IoIosPause /> : <IoPlay />}
        </PlayPauseButton>
        <ProgressBarContainer>
          {images.map((_, index) => (
            <ProgressBar
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
    </CarouselWrapper>
  );
};

export default Carousel;
