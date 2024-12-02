import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../utils/constants";

function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(function () {
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/${query}?api_key=${API_KEY}&language=en-US&page=1`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
  });
  return { movies, isLoading, error };
}

export default useMovies;
