import React, { useState } from "react";

const Switch = ({ switchItems = [], onTabChange }) => {
  const [left, setLeft] = useState(0);

  const handleActiveBtn = (index, btnName) => {
    setLeft(100 * index);
    onTabChange(btnName);
  };

  return (
    <div className="border-gray_100 border rounded-3xl relative whitespace-nowrap">
      {switchItems.map((item, index) => (
        <button
          type="button"
          key={index}
          className="px-2 py-1 text-white_100 capitalize w-[100px] text-sm whitespace-nowrap"
          onClick={() => handleActiveBtn(index, item.endpoint)}
        >
          {item.title}
        </button>
      ))}

      <div
        className="absolute top-0 h-full w-[100px] rounded-3xl z-[-1] transition-all duration-300 ease-in-out"
        style={{ background: "var(--gradient)", left }}
      />
    </div>
  );
};

export default Switch;
