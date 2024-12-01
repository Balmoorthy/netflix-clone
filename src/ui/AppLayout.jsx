import styled from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 6rem 2fr;
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
      <Main>Movies</Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
