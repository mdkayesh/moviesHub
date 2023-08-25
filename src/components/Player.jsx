import React from "react";
import ReactPlayer from "react-player";

const Player = ({ show, setShow, videoId, setVideoId }) => {
  const handleVideoPlayer = () => {
    setShow(false);
    setVideoId(null);
  };

  return (
    <div
      className={`${
        show ? "scale-100" : "scale-0"
      } fixed top-0 left-0 w-full h-full py-10 md:p-10 flex justify-center items-center backdrop-blur-sm z-50 overflow-hidden transition-all duration-500 ease-in-out`}
      onClick={handleVideoPlayer}
    >
      <div
        className="w-full h-full max-w-4xl mx-auto max-h-[500px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute -top-5 right-0 w-fit"
          onClick={handleVideoPlayer}
        >
          Close
        </button>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width={"100%"}
          height={"100%"}
          playing={true}
        />
      </div>
    </div>
  );
};

export default Player;
