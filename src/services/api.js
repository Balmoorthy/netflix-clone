import { BASE_URL } from "../utils/constants";
const API_KEY = import.meta.env.API_KEY || "1fd52f185dd28a7c18e07acd8658ef3e";

// POPULAR MOVIES
export async function getPopularMovies() {
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
}
