import styled from "styled-components";
import Faq from "../ui/Faq";
import Header from "../ui/Header";
import HeroSection from "../ui/HeroSection";

const Main = styled.main`
  width: 100%;
  max-width: 120rem;
  background-color: var(--color-grey-950);
  margin: 0 auto;
  margin-top: 5rem;
  padding: 0 12rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(249, 146, 151, 0.2);
`;

function Home() {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <HeroSection />
          <Faq />
        </Container>
      </Main>
    </>
  );
}

export default Home;
