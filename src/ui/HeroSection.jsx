import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const images = [
  "home-slider/home-slide-img-1.jpg",
  "home-slider/home-slide-img-2.jpg",
  "home-slider/home-slide-img-3.jpg",
  "home-slider/home-slide-img-4.jpg",
  "home-slider/home-slide-img-5.jpg",
];
const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
    display: none;
    transition: opacity 0.5s ease-in-out;

    &.active {
      display: block;
      opacity: 1;
    }
  }
`;

const Controls = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  gap: 5px;
`;

const ProgressBar = styled.div`
  flex: 1;
  height: 5px;
  background: var(--color-grey-400);
  position: relative;
  cursor: pointer;
  border-radius: var(--border-radius-md);

  .progress {
    height: 100%;
    background: var(--color-grey-200);
    transition: width 0.1s linear;
    border-radius: var(--border-radius-md);
  }

  &:hover {
    height: 7px;
    width: 7px;
  }
`;

const PlayPauseButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background: #0056b3;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
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

  useEffect(() => {
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
      progressRefs.current.forEach(clearInterval);
    };
  }, [isPlaying, currentIndex]);

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

  const changeSlide = (direction) => {
    setProgressBars((prev) => {
      const updated = [...prev];
      updated[currentIndex] = 0;
      return updated;
    });

    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + direction + images.length) % images.length;
      return nextIndex;
    });

    if (isPlaying) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        changeSlide(1);
      }, DURATION);
    }
  };

  const handleProgressBarClick = (index) => {
    setProgressBars((prev) => {
      const updated = [...prev];
      updated[currentIndex] = 0;
      return updated;
    });
    setCurrentIndex(index);

    if (isPlaying) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        changeSlide(1);
      }, DURATION);
    }
  };

  return (
    <CarouselWrapper>
      <ImageContainer>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? "active" : ""}
          />
        ))}
      </ImageContainer>
      <NavigationButton className="left" onClick={() => changeSlide(-1)}>
        &#8249;
      </NavigationButton>
      <NavigationButton className="right" onClick={() => changeSlide(1)}>
        &#8250;
      </NavigationButton>
      <Controls>
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
        <PlayPauseButton onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </PlayPauseButton>
      </Controls>
    </CarouselWrapper>
  );
};

export default Carousel;
