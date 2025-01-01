import { useState } from "react";
import styled from "styled-components";
import Carousel from "../ui/Carousel/Carousel";
import Faq from "../ui/Faq";
import Header from "../ui/Header";

const Main = styled.main`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 0 12rem;
`;

const OuterContainer = styled.div`
  background-color: var(--color-bg);
  position: relative;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

const BgImgContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  z-index: -1;
`;

const BackgroundImage = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "backgroundImage",
})`
  background-image: ${(props) => `url(${props.backgroundImage})`};
  transition: background-image 0.2s ease-in-out;
  filter: blur(16px);
  position: absolute;
  width: 100%;
  height: 160rem;
  opacity: 0.4;
  mask-image: linear-gradient(
    rgb(217, 217, 217) 78.62%,
    rgba(115, 115, 115, 0) 100%
  );
`;

const ImgShadow = styled.div`
  opacity: 75%;
  background: radial-gradient(
    92.16% 100% at 49.87% 0%,
    rgba(247, 99, 107, 0.3) 19.86%,
    rgba(0, 0, 0, 0) 100%
  );
  position: absolute;
  height: 112rem;
  width: 100%;
`;

const ImgMask = styled.div`
  background: radial-gradient(
    50% 100% at 50% 0%,
    rgba(44, 66, 156, 0.15) 0%,
    rgba(0, 0, 0, 0)
  );
  position: absolute;
  height: 112rem;
  width: 100%;
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
    <OuterContainer>
      <BgImgContainer>
        <BackgroundImage backgroundImage={backgroundImage}></BackgroundImage>
        <ImgShadow />
        <ImgMask />
      </BgImgContainer>
      <Header />
      <Main>
        <Container>
          {/* <HeroSection onImageChange={handleImageChange} /> */}
          <Carousel onImageChange={handleImageChange} />
          <Faq />
        </Container>
      </Main>
    </OuterContainer>
  );
}

export default Home;
