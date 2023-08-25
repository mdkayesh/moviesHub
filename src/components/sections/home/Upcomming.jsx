import React from "react";
import CategorySlider from "../CategorySlider";
import { useFetch } from "../../hooks";

const UpComming = () => {
  const { data, loading } = useFetch(`/movie/upcoming`);

  //   const onTabChange = (tab) => {
  //     setEndpoint(tab);
  //   };

  return (
    <CategorySlider
      data={data?.results}
      title={"Up Comming"}
      //   btnItems={[
      //     { title: "Movies", endpoint: "movie" },
      //     { title: "Tv Shows", endpoint: "tv" },
      //   ]}
      loading={loading}
      //   onTabChange={onTabChange}
      endpoint={"movie"}
    />
  );
};

export default UpComming;
