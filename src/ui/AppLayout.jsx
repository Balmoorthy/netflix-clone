import styled from "styled-components";
import { API_KEY, BASE_URL } from "../utils/constants";
import Header from "./Header";
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
  padding-top: 2rem;
`;

function AppLayout() {
  // const [query, setQuery] = useState("");
  // const { movies, error, isLoading } = useMovies(query);
  return (
    <StyledAppLayout>
      <SideBar />
      <Header />
      <Main>
        {/* <Loader /> */}
        <MovieRow
          title="Trending Now"
          fetchUrl={`${BASE_URL}/trending/all/day?api_key=${API_KEY}`}
        />
        <MovieRow
          title="Popular"
          fetchUrl={`${BASE_URL}/movie/popular?api_key=${API_KEY}`}
        />
        <MovieRow
          title="Top Rated"
          fetchUrl={`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`}
        />
        <MovieRow
          title="Upcoming Movies"
          fetchUrl={`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`}
        />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
