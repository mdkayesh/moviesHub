import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import placeholder from "../../../assets/placeholder.png";
import styles from "../../../utils/styles";
import { useSelector } from "react-redux";
import Img from "../../img/Img";
import placeHolder from "../../../assets/profile.png";

// import required modules

const TopCastSlider = ({ data, loading }) => {
  const { configUrls } = useSelector((state) => state.homeSlice);

  return (
    <>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          400: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6.5,
            spaceBetween: 20,
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
                  className={`${styles.loaderContainer} relative aspect-[1/1.3] rounded-full mx-auto`}
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
                  className={`${styles.loaderContainer} h-4 w-4/5 mt-3 mx-auto rounded-full`}
                >
                  <div className={`${styles.loaderAnimation}`}></div>
                </div>

                <div
                  className={`${styles.loaderContainer} h-4 w-3/5 mt-3 mx-auto rounded-full`}
                >
                  <div className={`${styles.loaderAnimation}`}></div>
                </div>
              </SwiperSlide>
            ))
          : data?.map((cast) => (
              <SwiperSlide key={cast?.id}>
                <div
                  className={
                    "rounded-full h-full w-full max-w-[200px] max-h-[200px] overflow-hidden object-cover aspect-[1/1.3]"
                  }
                >
                  <Img
                    src={
                      cast?.profile_path
                        ? configUrls?.profile + cast?.profile_path
                        : placeHolder
                    }
                    alt={cast?.original_name}
                  />
                </div>
                <h3 className="text-center mt-2 text-white_90">
                  {cast?.original_name}
                </h3>
                <h3 className="text-center text-sm text-gray_100">
                  {cast?.character}
                </h3>
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
};

export default TopCastSlider;
