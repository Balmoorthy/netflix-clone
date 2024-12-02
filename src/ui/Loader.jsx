import { LineWave } from "react-loader-spinner";
import MovieCard from "./MovieCard";

function Loader() {
  return (
    <div>
      <LineWave
        visible={true}
        height="100"
        width="100"
        color="red"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />

      <MovieCard image={"/movieCard.jpe"} imageName="bala" />
    </div>
  );
}

export default Loader;
