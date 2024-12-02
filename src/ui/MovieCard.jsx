import PropTypes from "prop-types";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 12rem;
  height: 18rem;
  background-color: var(--color-grey-400);
  border-radius: 5px;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(10px);
  }
`;

const StyledImg = styled.img``;

function MovieCard({ image, imageName }) {
  return (
    <StyledContainer>
      <StyledImg src={image} alt={imageName} />
    </StyledContainer>
  );
}

MovieCard.propTypes = {
  image: PropTypes.string,
  imageName: PropTypes.string,
};

MovieCard.defaultProps = {
  image: "movieCard.jpg",
  imageName: "moviePoster",
};

export default MovieCard;
