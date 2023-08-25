import React, { useState } from "react";
import CategorySlider from "../CategorySlider";
import { useFetch } from "../../hooks";

const Popular = () => {
  const [endpoint, setEndpoint] = useState("tv");
  const { data, loading } = useFetch(`/${endpoint}/popular`);

  const onTabChange = (tab) => {
    setEndpoint(tab);
  };

  return (
    <CategorySlider
      data={data?.results}
      title={"What's Popular"}
      btnItems={[
        { title: "On tv", endpoint: "tv" },
        { title: "In Theatre", endpoint: "movie" },
      ]}
      loading={loading}
      onTabChange={onTabChange}
      endpoint={endpoint}
    />
  );
};

export default Popular;
