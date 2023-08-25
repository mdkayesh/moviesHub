import React from "react";
import Select from "react-select";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  // Add more options
];

const MySelect = () => {
  return (
    <Select
      options={options}
      isMulti={false}
      className="select max-w-[500px] min-w-[200px]"
      classNamePrefix={"react-select"}
      placeholder="Select Genres..."
    />
  );
};

export default MySelect;
