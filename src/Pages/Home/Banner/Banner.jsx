/* eslint-disable react/no-unescaped-entities */
import bgVideo from "../../../assets/Resilience.mp4";

const Banner = () => {
  return (
    <div className="bg-black mx-auto relative">
      <video
        src={bgVideo}
        autoPlay
        loop
        muted
        // poster={black}
        className="md:h-[86vh] w-[100%] object-cover"
      ></video>
      <div className="w-full text-[#DE76A3] text-center absolute bottom-0 left-0 right-0 mx-auto bg-[#401D3E] bg-opacity-[0.6] lg:pb-2 pb-1">
        <h1 className="font-[cursive] uppercase leading-0 text-[25px] lg:text-[50px] leading-0 font-bold drop-shadow-md leading-none opacity-100">
          Resilience
        </h1>
        <p className="text-[16px] lg:text-[35px] leading-none">
          Connecting Communities to Vital Supplies
        </p>
      </div>
    </div>
  );
};
// #DE76A3
// #401D3E
export default Banner;
