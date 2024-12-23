import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";

function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const response = await fetch(
            `${BASE_URL}/search/movie?api_key=${
              import.meta.env.VITE_TMDB_API_KEY
            }&query=${encodeURIComponent(query)}&language=en-US&page=1`,
            { signal: controller.signal }
          );
          if (!response.ok)
            throw new Error(
              `Something went wrong with fetching movies: ${response.statusText}`
            );

          const data = await response.json();
          if (!data.results || data.results.length === 0) {
            throw new Error("No movies found.");
          }
          console.log(data.results);
          setMovies(data.results);
          setError("");
        } catch (error) {
          if (error.name !== "AbortError") {
            setError(error.message);
          }
          console.error("Error fetching movies:", error);
        } finally {
          setIsLoading(false);
        }
      }

      if (!query.length) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, error };
}

export default useMovies;
