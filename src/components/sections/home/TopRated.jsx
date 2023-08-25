import React, { useState } from "react";
import CategorySlider from "../CategorySlider";
import { useFetch } from "../../hooks";

const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/top_rated`);

  const onTabChange = (tab) => {
    setEndpoint(tab);
  };

  return (
    <CategorySlider
      data={data?.results}
      title={"Top Rated"}
      btnItems={[
        { title: "Movies", endpoint: "movie" },
        { title: "Tv Shows", endpoint: "tv" },
      ]}
      loading={loading}
      onTabChange={onTabChange}
      endpoint={endpoint}
    />
  );
};

export default TopRated;
