import { FidgetSpinner } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[300px]">
      <FidgetSpinner
        visible={true}
        height="100"
        width="100"
        ariaLabel="fidget-spinner-loading"
        backgroundColor="#401D3E"
        ballColors={["#54C7EC", "#FFBA00", "#FA383E"]}
        wrapperStyle={{}}
        wrapperClass="fidget-spinner-wrapper"
      />
    </div>
  );
};

export default Loader;
