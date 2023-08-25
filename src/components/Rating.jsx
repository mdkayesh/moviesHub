import React from "react";

const Rating = ({ voteAverage }) => {
  const vote = voteAverage?.toFixed(1);

  return (
    <div className="relative">
      <svg className="w-10 h-10 transform -rotate-90">
        <circle
          className="fill-bg_secondary stroke-gray-800"
          cx="19"
          cy="19"
          r="16"
          strokeWidth="4"
          fill="transparent"
        />
        <circle
          className="fill-none stroke-primary"
          cx="19"
          cy="19"
          r="16"
          strokeWidth="4"
          pathLength={"1"}
          // fill="transparent"
          strokeDasharray={`${vote / 10}px 1px`}
          strokeDashoffset="0px"
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-[10px]">
        {vote * 10}
        <span className="text-[7px] align-top">%</span>
      </div>
    </div>
  );
};

export default Rating;
