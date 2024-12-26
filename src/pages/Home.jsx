import styled from "styled-components";
import Faq from "../ui/Faq";
import Header from "../ui/Header";
import HeroSection from "../ui/HeroSection";

const Main = styled.main`
  min-width: 300px;
  max-width: 150rem;
  background-color: var(--color-grey-950);
  overflow: auto;
  padding: 2rem;
  margin: auto;
`;

function Home() {
  return (
    <Main>
      <Header />
      <HeroSection />
      <Faq />
    </Main>
  );
}

export default Home;
