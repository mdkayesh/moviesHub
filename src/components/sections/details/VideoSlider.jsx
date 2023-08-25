import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import placeholder from "../../../assets/placeholder.png";
import styles from "../../../utils/styles";
import Img from "../../img/Img";
import { PlayIcon } from "../../../utils/Icons";

// import required modules

const VideoSlider = ({ data, loading, setShow, setVideoId }) => {
  const handleVideoPlayer = (id) => {
    setShow(true);
    setVideoId(id);
  };

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
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4.5,
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
                  className={`${styles.loaderContainer} relative aspect-[1.3/1] rounded-lg mx-auto`}
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
              </SwiperSlide>
            ))
          : data?.map((video) => (
              <SwiperSlide key={video?.id}>
                <div
                  className={
                    "h-full w-full cursor-pointer hover:text-primary [&_svg]:hover:scale-125"
                  }
                  onClick={() => handleVideoPlayer(video?.key)}
                >
                  <div className="relative aspect-[1.4/1] [&_span]:h-full">
                    <Img
                      src={`https://img.youtube.com/vi/${video?.key}/mqdefault.jpg`}
                      alt={video?.name}
                      className={"object-cover rounded-lg h-full"}
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-4xl">
                      <PlayIcon className="transition-all duration-300 ease-in" />
                    </div>
                  </div>

                  <h3 className="line-clamp-1" title={video?.name}>
                    {video?.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
};

export default VideoSlider;
