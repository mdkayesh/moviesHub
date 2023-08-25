import React from "react";
import { PlayIcon } from "../utils/Icons";

const PlayBtn = ({ onClick }) => {
  return (
    <div
      className="flex gap-2 items-center cursor-pointer hover:text-primary transition-all duration-500"
      onClick={onClick}
    >
      <PlayIcon className="text-5xl" />
      <p>Watch Trailer</p>
    </div>
  );
};

export default PlayBtn;
