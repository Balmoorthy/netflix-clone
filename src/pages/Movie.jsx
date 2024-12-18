import { useParams } from "react-router-dom";

function Movie() {
  const { movieId } = useParams();
  console.log(movieId);

  return <div>movie</div>;
}

export default Movie;
