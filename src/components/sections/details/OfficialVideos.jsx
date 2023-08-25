import React from "react";
import VideoSlider from "./VideoSlider";
import styles from "../../../utils/styles";

const OfficialVideos = ({ videos, videoLoading, setShow, setVideoId }) => {
  return (
    <div className={`${styles.SectionPaddingY} ${styles.paddingX}`}>
      <div className="container">
        <h2 className="mb-6 text-gradient font-semibold text-3xl">
          Official Videos
        </h2>
        <VideoSlider
          data={videos}
          loading={videoLoading}
          setShow={setShow}
          setVideoId={setVideoId}
        />
      </div>
    </div>
  );
};

export default OfficialVideos;
