/* eslint-disable react/no-unescaped-entities */
import bgVideo from "../../../assets/How to organise social services during and after a natural disaster_ (online-video-cutter.com).mp4";

const Banner = () => {
  return (
    <div className="bg-black mx-auto">
      <video
        src={bgVideo}
        autoPlay
        loop
        muted
        // poster={black}
        className="md:h-[86vh] w-[100%] object-cover opacity-[0.6]"
      ></video>
      <div className="w-[90%] text-white text-center absolute top-[100px] md:top-[40%] left-0 right-0 mx-auto">
        <h2 className="my-4 text-[20px] lg:text-[50px] font-bold drop-shadow-md">
          <span className="font-[cursive] uppercase">Resilience</span> <br />
          Connecting Communities to Vital Supplies
        </h2>
      </div>
    </div>
  );
};
// #DE76A3
// #401D3E
export default Banner;
