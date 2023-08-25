import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import MovieCart from "./MovieCart";
import placeholder from "../assets/placeholder.png";
import styles from "../utils/styles";

// import required modules

const Slider = ({ data, loading, endpoint }) => {
  return (
    <>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          600: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5.5,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 6.5,
            spaceBetween: 25,
          },
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {loading
          ? [...Array(20)].map((_, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`${styles.loaderContainer} relative rounded-lg w-full`}
                >
                  <img
                    src={placeholder}
                    alt="placeholder"
                    className="opacity-0"
                  />
                  <div
                    className={`${styles.loaderAnimation} absolute top-0 left-0`}
                  ></div>
                </div>
                <div
                  className={`${styles.loaderContainer} h-4 w-full mt-3 rounded-full`}
                >
                  <div className={`${styles.loaderAnimation}`}></div>
                </div>
                <div
                  className={`${styles.loaderContainer} h-3 w-[70%] mt-3 rounded-full`}
                >
                  <div className={`${styles.loaderAnimation}`}></div>
                </div>
              </SwiperSlide>
            ))
          : data?.map((movie, index) => (
              <SwiperSlide key={movie?.id}>
                <MovieCart {...movie} index={index} endpoint={endpoint} />
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
};

export default Slider;
