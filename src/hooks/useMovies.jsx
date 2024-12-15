import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../utils/constants";

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
            `${BASE_URL}/movie/${query}?api_key=${API_KEY}&language=en-US&page=1`
          );
          if (!response.ok)
            throw new Error(
              `Something went to wrong with fetching movies: ${response.statusText}`
            );

          const data = await response.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setMovies(data.Search);
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
