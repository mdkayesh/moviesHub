import React from "react";
import styles from "../../../utils/styles";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import TextAnimation from "../../../utils/TextAnimation";
import { fadeIn } from "../../../utils/animation";
import HeroSearchBar from "./HeroSearchBar";
import Img from "../../img/Img";

const Hero = ({ image, loading }) => {
  const { configUrls } = useSelector((state) => state.homeSlice);

  return (
    <section
      className={`relative h-screen w-full bg-cover bg-no-repeat bg-center max-h-[600px]`}
    >
      {!loading && (
        <div className="absolute top-0 left-0 w-full h-full z-[-1] [&_>span]:block [&_>span]:w-full [&_>span]:h-full">
          <Img
            className={"w-full h-full object-cover"}
            src={configUrls?.backDrop + image}
            alt={"movies"}
          />
        </div>
      )}

      <div className="bg-gradient-to-b from-transparent to-bg_primary w-full h-[100px] absolute bottom-0 left-0"></div>
      <div
        className={`${styles.pagePaddingtop} ${styles.paddingX} w-full h-full bg-[#122740a0]`}
      >
        <div className="flex justify-center container h-full flex-col gap-4 text-white_100">
          <div className="overflow-hidden">
            <motion.div
              variants={fadeIn("up", "spring", 0.3, 0.4)}
              animate="visible"
              initial="hidden"
            >
              <h1 className="text-4xl font-bold text-gradient">Welcome.</h1>
            </motion.div>
          </div>

          <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl">
            <TextAnimation
              text={`Millions of movies, TV shows and people to discover. Explore now.`}
            />
          </h2>

          <HeroSearchBar />
        </div>
      </div>
    </section>
  );
};

export default Hero;
