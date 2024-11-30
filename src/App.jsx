import { BASE_URL } from "./utils/constants";

const API_KEY = import.meta.env.API_KEY || "1fd52f185dd28a7c18e07acd8658ef3e"; // Replace with your TMDB API Key

function App() {
  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      console.log("Popular Movies:", data.results); // Movie list
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // Call the function
  fetchPopularMovies();

  return (
    <>
      <p className="">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
