import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import WhatWeDo from "../Services/services";
import Supplies from "../Supplies/Supplies";
import Testimonials from "../Testimonials/Testimonials";

const HomeLayout = () => {
  return (
    <>
      <Banner />
      <Supplies />
      <Testimonials />
      <Gallery />
      <WhatWeDo />
    </>
  );
};

export default HomeLayout;
