import styled from "styled-components";
import { API_KEY, BASE_URL } from "../utils/constants";
import Header from "./Header";
import Loader from "./Loader";
import MovieRow from "./MovieRow";
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
        <Loader />
        <MovieRow
          title="Trending Now"
          fetchUrl={`${BASE_URL}/trending/all/day?api_key=${API_KEY}`}
        />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
