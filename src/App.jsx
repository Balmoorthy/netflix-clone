import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Movie from "./pages/Movie";
import MyList from "./pages/MyList";
import NewPopular from "./pages/NewPopular";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import TvShows from "./pages/TvShows";
import User from "./pages/User";
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
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="account/:userName" element={<User />} />
            <Route path="movies/:movieId" element={<Movie />} />
            <Route path="my-list" element={<MyList />} />
            <Route path="new-popular" element={<NewPopular />} />
            <Route path="tv-shows" element={<TvShows />} />
            <Route path="account/profile" element={<Profile />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
