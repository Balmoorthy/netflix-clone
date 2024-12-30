import { useState } from "react";
import styled from "styled-components";
import Faq from "../ui/Faq";
import Header from "../ui/Header";
import HeroSection from "../ui/HeroSection";

const Main = styled.main`
  width: 100%;
  max-width: 120rem;
  /* background-color: var(--color-grey-950); */
  margin: 0 auto;
  margin-top: 5rem;
  padding: 0 12rem;
  /* z-index: 2; */
`;

const OuterContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
    92.05% 69.94% at 76.34% 50.09%,
    rgba(0, 0, 0, 0) 21.7%,
    rgba(0, 0, 0, 0.8) 53.83%,
    rgba(0, 0, 0, 0.95) 100%
  );

  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${(props) => `url(${props.backgroundImage})`};
    background-size: contain;
    background-position: center;
    filter: blur(50px); /* Apply blur to the background image */
    /* Make sure the blurred image stays behind the content */
    z-index: -1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState("");

  // Update the background image when the currentIndex changes
  const handleImageChange = (index, image) => {
    setCurrentIndex(index);
    setBackgroundImage(image);
  };

  return (
    <OuterContainer backgroundImage={backgroundImage}>
      <Header />
      <Main>
        <Container>
          <HeroSection onImageChange={handleImageChange} />
          <Faq />
        </Container>
      </Main>
    </OuterContainer>
  );
}

export default Home;
