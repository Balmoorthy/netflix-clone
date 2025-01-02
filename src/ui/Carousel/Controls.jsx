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
  width: 20%;
  gap: 6px;
`;

const ProgressBar = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isCurrent",
})`
  flex: 1;
  height: 5px;
  background: ${({ isCurrent }) =>
    isCurrent ? "var(--color-grey-400)" : "var(--color-grey-500)"};
  position: relative;
  cursor: pointer;
  border-radius: var(--border-radius-md);
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;

  .progress {
    height: 100%;
    background: var(--color-grey-200);
    transition: width 0.1s linear;
    border-radius: var(--border-radius-md);
    transition: opacity 0.3s ease;
    opacity: 1;

    &paused {
      opacity: 0;
    }
  }

  &:hover {
    transform: scale(1.05);
    background: ${({ isCurrent }) =>
      isCurrent ? "var(--color-grey-500)" : "var(--color-grey-300)"};
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
  currentIndex,
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
            isCurrent={index === currentIndex}
            key={index}
            onClick={() => handleProgressBarClick(index)}
          >
            <div
              className={`progress ${isPlaying ? "" : "paused"}`}
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
  currentIndex: PropTypes.number,
  handleProgressBarClick: PropTypes.func,
};
