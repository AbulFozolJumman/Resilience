import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Heading from "../../ui/Heading";

const Gallery = () => {
  return (
    <div className="max-w-[1440px] mx-auto md:pb-20 pb-10">
      <Heading title="Gallery" />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={4}
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
          <img
            src="https://i.ibb.co/Lhw52hZ/First-Aid-Kit.jpg"
            alt="First Aid Kit"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/s6PdDW4/Antibiotics.jpg"
            alt="Antibiotics"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/d4wB7Vb/Water-Purification-Tablets.jpg"
            alt="Water Purification Tablets"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/bJbbvkL/Surgical-Masks.jpg"
            alt="Surgical Masks"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Zcdp88W/Blankets.jpg" alt="Blankets" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/QYL7YGv/Oral-Rehydration-Salts.jpg"
            alt="Oral Rehydration Salts"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/mCpQx1v/Emergency-Flashlights.jpg"
            alt="Emergency Flashlights"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/8Bk95j3/Bandages.jpg" alt="Bandages" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/Kjfj1ZQ/Portable-Generators.jpg"
            alt="Portable Generators"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/jbCCKCM/Pain-Relievers.jpg"
            alt="Pain Relievers"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/z73rkTq/Tents.jpg" alt="Tents" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/J5L4Djb/Hygiene-Kits.jpg"
            alt="Hygiene Kits"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;
