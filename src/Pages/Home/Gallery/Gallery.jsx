import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Heading from "../../../components/Heading";

const Gallery = () => {
  return (
    <div className="max-w-[1440px] mx-auto md:pb-20 pb-10">
      <Heading title="Gallery" />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/Lhw52hZ/First-Aid-Kit.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/s6PdDW4/Antibiotics.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/d4wB7Vb/Water-Purification-Tablets.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/bJbbvkL/Surgical-Masks.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Zcdp88W/Blankets.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/QYL7YGv/Oral-Rehydration-Salts.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/mCpQx1v/Emergency-Flashlights.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/8Bk95j3/Bandages.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Kjfj1ZQ/Portable-Generators.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/jbCCKCM/Pain-Relievers.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/z73rkTq/Tents.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/J5L4Djb/Hygiene-Kits.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;
