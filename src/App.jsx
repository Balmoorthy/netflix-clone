import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "./pages/Movie";
import PageNotFound from "./pages/PageNotFound";
import { getPopularMovies } from "./services/api";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";

function App() {
  getPopularMovies();
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}></Route>
          <Route path="/movie/:movieId" element={<Movie />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <p className="">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
