import React, { useEffect, useState } from "react";
import Hero from "../sections/home/Hero";
import { useFetch } from "../hooks";
import Popular from "../sections/home/Popular";
import Trending from "../sections/home/Trending";
import TopRated from "../sections/home/TopRated";
import UpComming from "../sections/home/Upcomming";

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState();
  const { data, loading } = useFetch("/movie/popular");

  useEffect(() => {
    setBackgroundImage(
      data?.results[Math.floor(Math.random() * 20)]?.backdrop_path
    );
  }, [data]);

  return (
    <div className={`home`}>
      <Hero image={backgroundImage} loading={loading} />
      <Trending />
      <Popular />
      <TopRated />
      <UpComming />
    </div>
  );
};

export default Home;
