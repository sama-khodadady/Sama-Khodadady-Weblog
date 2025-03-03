import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px",
      }}
    >
      <TailSpin height="30" width="30" color="grey" ariaLabel="loading" />
    </div>
  );
}

export default Loader;
