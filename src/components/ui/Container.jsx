/* eslint-disable react/prop-types */

const Container = ({ children }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
      {children}
    </div>
  );
};

export default Container;
