import styled from "styled-components";
import Faq from "../ui/Faq";
import Header from "../ui/Header";

const Main = styled.main`
  width: 120rem;
  background-color: var(--color-grey-950);
  overflow: auto;
  padding: 2rem;
  margin: auto;
`;

function Home() {
  return (
    <Main>
      <Header />
      <Faq />
    </Main>
  );
}

export default Home;
