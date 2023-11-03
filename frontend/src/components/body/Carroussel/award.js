import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Style.css";

// import required modules
import { EffectCards } from "swiper/modules";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Divider, Typography } from "@mui/material";

export default function Award() {
  return (
    <>
      {/* <Divider ></Divider>   */}
      <Typography
        variant="h2"
        fontWeight={"bold"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        pt={"60px"}
        color={"#CC3366"}
      >
        Our Awards
      </Typography>
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
          <div className="slide-container">
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            <Typography className="text-overlay">Times Award</Typography>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            <Typography className="text-overlay">KTCC Award</Typography>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            <Typography className="text-overlay">Fantastic Award</Typography>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            <Typography className="text-overlay">India 500 Award</Typography>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            <Typography className="text-overlay">Radio City Award</Typography>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            <Typography className="text-overlay">TN Govt. Award</Typography>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            <Typography className="text-overlay">TN Govt. Award</Typography>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
