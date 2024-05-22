/* eslint-disable react/prop-types */
const Heading = ({ title }) => {
  return (
    <div className="flex justify-center items-center gap-2 md:gap-5 md:mb-10 mb-5">
      <hr className="md:w-20 w-12 border-2 border-[#DE76A3]" />
      <h2 className="md:text-4xl text-2xl font-bold  text-[#401D3E] uppercase">
        {title}
      </h2>
      <hr className="md:w-20 w-12 border-2 border-[#DE76A3]" />
    </div>
  );
};

export default Heading;
