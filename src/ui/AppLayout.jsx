import styled from "styled-components";
import Header from "./Header";
import Loader from "./Loader";
import SideBar from "./SideBar";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 4rem 2fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-950);
  overflow: auto;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <SideBar />
      <Header />
      <Main>
        Movies <Loader />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
