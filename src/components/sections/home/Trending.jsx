import React, { useState } from "react";
import CategorySlider from "../CategorySlider";
import { useFetch } from "../../hooks";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endpoint}`);

  const onTabChange = (tab) => {
    setEndpoint(tab);
  };

  return (
    <div>
      <CategorySlider
        data={data?.results}
        title={"Trending"}
        btnItems={[
          { title: "Today", endpoint: "day" },
          { title: "This week", endpoint: "week" },
        ]}
        loading={loading}
        onTabChange={onTabChange}
      />
    </div>
  );
};

export default Trending;
