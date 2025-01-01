import { Outlet } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "./Forms/LoginForm";
import Header from "./Header";

const StyledAppLayout = styled.div`
  height: 100vh;
`;

const Main = styled.main`
  min-width: 300px;
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
      <LoginForm />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
