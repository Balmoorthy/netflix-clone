import PropTypes from "prop-types";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { slidesData } from "../../data/slidesData";
import CarouselWrapper from "./CarouselWrapper";
import Controls from "./Controls";

const OuterContainer = styled.div`
  width: calc(100vw - 6rem);
  height: 772px;
  padding: 0 4rem;
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

const Carousel = ({ onImageChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progressBars, setProgressBars] = useState(
    Array(slidesData.length).fill(0)
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
          (prevIndex + direction + slidesData.length) % slidesData.length;
        return nextIndex;
      });

      setTimeout(() => {
        const nextIndex =
          (currentIndex + direction + slidesData.length) % slidesData.length;
        onImageChange(nextIndex, slidesData[nextIndex].image);
      }, 0);

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
    setProgressBars((prev) => {
      const updated = [...prev];
      updated[currentIndex] = 0;
      return updated;
    });
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
              <CarouselWrapper
                currentIndex={currentIndex}
                changeSlide={changeSlide}
              />
            </ImgContainer>
          </ImgInnerContainer>
        </ImgOuterContainer>
        <Controls
          isPlaying={isPlaying}
          progressBars={progressBars}
          handlePlayPause={handlePlayPause}
          handleProgressBarClick={handleProgressBarClick}
        />
      </InnerContainer>
    </OuterContainer>
  );
};

export default Carousel;

Carousel.propTypes = {
  onImageChange: PropTypes.func,
};
