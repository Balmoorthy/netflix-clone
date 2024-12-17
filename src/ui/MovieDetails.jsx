import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, BASE_URL } from "../utils/constants";

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  const { original_title, poster_path, overview, vote_average } = movie;

  useEffect(function () {
    async function getMovieDetails(query) {
      try {
        const response = await fetch(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
        );
        const data = await response.json();
        setMovie(data.results);
        console.log(`Search results for ${query}:`, data.results);
      } catch (error) {
        console.log(error);
      }
    }

    getMovieDetails("Inception");
  }, []);

  return <div></div>;
}

export default MovieDetails;
