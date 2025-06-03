import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation } from "swiper/modules"; // Import Autoplay module

// Import Swiper styles
import "swiper/css";

import "../css/slider.css";

export default function Slider() {
  return (
    <>
      <Swiper
        className="mySwiper"
        modules={[Autoplay,Navigation]} 
        autoplay={{
          delay: 1500, 
          disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}