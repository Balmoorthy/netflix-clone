import { Toaster } from "react-hot-toast";
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
import { getPopularMovies } from "./services/apiMovies";
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
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </>
  );
}

export default App;
