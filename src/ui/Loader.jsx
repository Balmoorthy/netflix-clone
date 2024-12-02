import { LineWave } from "react-loader-spinner";

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
    </div>
  );
}

export default Loader;
