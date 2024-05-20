import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Supplies from "../Supplies/Supplies";
import Testimonials from "../Testimonials/Testimonials";

const HomeLayout = () => {
  return (
    <>
      <Banner />
      <Supplies />
      <Testimonials />
      <Gallery />
    </>
  );
};

export default HomeLayout;
