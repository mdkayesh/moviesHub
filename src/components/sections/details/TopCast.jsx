import React from "react";
import styles from "../../../utils/styles";
import TopCastSlider from "./TopCaseSlider";

const TopCast = ({ credits, creditsLoading }) => {
  return (
    <section className={`${styles.SectionPaddingY} ${styles.paddingX}`}>
      <div className="container">
        <h2 className="mb-6 text-gradient font-semibold text-3xl">Top Casts</h2>
        <TopCastSlider data={credits?.cast} loading={creditsLoading} />
      </div>
    </section>
  );
};

export default TopCast;
