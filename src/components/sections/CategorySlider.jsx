import React from "react";
import Slider from "../Slider";
import styles from "../../utils/styles";
import Switch from "../Switch";

const CategorySlider = ({
  data,
  btnItems,
  title,
  loading,
  onTabChange,
  endpoint,
}) => {
  return (
    <div className={`${styles.SectionPaddingY} ${styles.paddingX}`}>
      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-gradient font-semibold text-xl md:text-2xl lg:text-3xl">
            {title}
          </h2>
          <Switch switchItems={btnItems} onTabChange={onTabChange} />
        </div>
        <Slider data={data} loading={loading} endpoint={endpoint} />
      </div>
    </div>
  );
};

export default CategorySlider;
