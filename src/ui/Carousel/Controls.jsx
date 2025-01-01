import PropTypes from "prop-types";
import { IoIosPause } from "react-icons/io";
import { IoPlay } from "react-icons/io5";
import styled from "styled-components";
import { slidesData } from "../../data/slidesData";

const ControlsContainer = styled.div`
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
  transition: background, transform 0.2s ease-in-out;

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

function Controls({
  isPlaying,
  progressBars,
  handlePlayPause,
  handleProgressBarClick,
}) {
  return (
    <ControlsContainer>
      <PlayPauseButton onClick={handlePlayPause}>
        {isPlaying ? <IoIosPause /> : <IoPlay />}
      </PlayPauseButton>
      <ProgressBarContainer>
        {slidesData.map((_, index) => (
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
    </ControlsContainer>
  );
}

export default Controls;

Controls.propTypes = {
  isPlaying: PropTypes.bool,
  progressBars: PropTypes.node,
  handlePlayPause: PropTypes.func,
  handleProgressBarClick: PropTypes.func,
};
