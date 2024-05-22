import Banner from "../../components/HomeComponents/Banner/Banner";
import Gallery from "../../components/HomeComponents/Gallery/Gallery";
import WhatWeDo from "../../components/HomeComponents/Services/services";
import Supplies from "../../components/HomeComponents/Supplies/Supplies";
import Testimonials from "../../components/HomeComponents/Testimonials/Testimonials";

const HomePage = () => {
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

export default HomePage;
