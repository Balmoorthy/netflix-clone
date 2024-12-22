import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

const StyledAppLayout = styled.div`
  /* grid-template-columns: 4rem 2fr;
  grid-template-rows: auto 1fr; */
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-900);
  overflow: auto;
  padding-top: 2rem;
`;

function AppLayout() {
  // const [query, setQuery] = useState("");
  // const { movies, error, isLoading } = useMovies(query);
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
