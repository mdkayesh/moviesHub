import React, { useState } from "react";
import { useSelector } from "react-redux";
import Img from "../../img/Img";
import moment from "moment";
import styles from "../../../utils/styles";
import Rating from "../../Rating";
import PlayBtn from "../../PlayBtn";
import Player from "../../Player";
import TopCast from "./TopCast";
import placeholder from "../../../assets/placeholder.png";
import OfficialVideos from "./OfficialVideos";
import CategorySlider from "../../sections/CategorySlider";
import { useParams } from "react-router-dom";

const DetailsContents = ({
  loading,
  data,
  credits,
  videos,
  creditsLoading,
  videoLoading,
  similar,
  similarLoading,
  recommendations,
  recommendationsLoading,
}) => {
  const { configUrls } = useSelector((state) => state.homeSlice);
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const { mediaType } = useParams();

  const formatToMinHr = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours} hr ${remainingMinutes} min`;
  };

  const directors = credits?.crew?.filter(
    (c) => c?.department.toLowerCase() === "directing"
  );
  const writers = credits?.crew?.filter(
    (c) => c?.department.toLowerCase() === "writing"
  );

  const handleVideoPlayer = () => {
    setShow(true);
    setVideoId(videos?.results?.[0]?.key);
  };

  return (
    <div className="detailsContents">
      {/* bg image */}
      {loading ? (
        <div className={`${styles.paddingX}`}>
          <div className={`container ${styles.pagePaddingtop}`}>
            <div className="flex flex-col md:flex-row gap-6 pt-10">
              <div className="w-full md:w-1/3 relative">
                <img
                  src={placeholder}
                  alt="placeholder"
                  className="w-full opacity-0"
                />
                <div
                  className={`${styles.loaderContainer} absolute top-0 left-0 w-full h-full rounded-lg`}
                >
                  <div className={`${styles.loaderAnimation}`} />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <div
                  className={`${styles.loaderContainer} h-6 max-w-[200px] rounded-full`}
                >
                  <div className={`${styles.loaderAnimation}`} />
                </div>
                <div
                  className={`${styles.loaderContainer} h-4 max-w-[80%] mt-3 rounded-full`}
                >
                  <div className={`${styles.loaderAnimation}`} />
                </div>
                <div className="flex gap-4 items-center flex-wrap mt-4">
                  {[...Array(2)].map((_, index) => (
                    <div
                      key={index}
                      className={`${styles.loaderContainer} h-12 w-12 rounded-full`}
                    >
                      <div className={`${styles.loaderAnimation}`} />
                    </div>
                  ))}
                  <div
                    className={`${styles.loaderContainer} h-4 w-[100px] rounded-lg`}
                  >
                    <div className={`${styles.loaderAnimation}`} />
                  </div>
                </div>
                <div
                  className={`${styles.loaderContainer} h-5 max-w-[100px] mt-6 rounded-full`}
                >
                  <div className={`${styles.loaderAnimation}`} />
                </div>

                <div
                  className={`${styles.loaderContainer} h-3 max-w-full mt-5 rounded-full`}
                >
                  <div className={`${styles.loaderAnimation}`} />
                </div>
                <div
                  className={`${styles.loaderContainer} h-3 max-w-full mt-3 rounded-full`}
                >
                  <div className={`${styles.loaderAnimation}`} />
                </div>
                <div
                  className={`${styles.loaderContainer} h-3 max-w-full mt-3 rounded-full`}
                >
                  <div className={`${styles.loaderAnimation}`} />
                </div>
                <div
                  className={`${styles.loaderContainer} h-3 max-w-full mt-3 rounded-full`}
                >
                  <div className={`${styles.loaderAnimation}`} />
                </div>
                <div
                  className={`${styles.loaderContainer} h-3 max-w-[60%] mt-3 rounded-full`}
                >
                  <div className={`${styles.loaderAnimation}`} />
                </div>

                <div className="flex gap-4 flex-wrap justify-between mt-6">
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className="w-1/4">
                      <div
                        className={`${styles.loaderContainer} h-4 max-w-[100px] mt-3 rounded-full`}
                      >
                        <div className={`${styles.loaderAnimation}`} />
                      </div>
                      <div
                        className={`${styles.loaderContainer} h-3 max-w-[80px] mt-3 rounded-full`}
                      >
                        <div className={`${styles.loaderAnimation}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        data && (
          <div className="hero bg-[#0a1d32e2] pt-16 relative">
            <div
              className={
                "absolute top-0 left-0 w-full h-full z-[-1] [&_>span]:block [&_>span]:w-full [&_>span]:h-full"
              }
            >
              <Img
                className={"w-full h-full object-cover"}
                src={configUrls?.backDrop + data.poster_path}
                alt={data.original_title || data.name}
              />
            </div>

            <div className={`container ${styles.paddingX} py-10`}>
              <div className="flex flex-col md:flex-row gap-10 relative">
                <div className="w-full md:w-1/3">
                  <Img
                    src={configUrls?.poster + data.poster_path}
                    alt={data.original_title || data.name}
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="w-full md:w-2/3">
                  <h1 className="text-xl font-semibold to-white_90">
                    {data.original_title || data.name} (
                    {moment(data.release_date).year()})
                  </h1>
                  <p className="mt-1 text-gray_100 text-sm">{data.tagline}</p>

                  <p className="flex gap-2 mt-3 flex-wrap">
                    {data.genres?.map((item) => (
                      <span
                        key={item?.id}
                        className="text-xs bg-primary text-black_100 block py-0.5 px-2 font-semibold"
                      >
                        {item?.name}
                      </span>
                    ))}
                  </p>

                  <div className="flex gap-5 items-center mt-6 flex-wrap">
                    <div className="scale-[1.3] ml-1">
                      <Rating voteAverage={data.vote_average} />
                    </div>
                    <PlayBtn onClick={handleVideoPlayer} />
                  </div>

                  <div className="mt-7">
                    <h2 className="text-xl font-semibold">Overview</h2>
                    <p className="mt-3">{data.overview}</p>
                  </div>

                  <div className="flex gap-5 items-center justify-between flex-wrap mt-6 border-b-2 border-gray_100 pb-3">
                    <div>
                      <h4 className="font-semibold text-white_90">Status:</h4>
                      <p className="text-gray_100 text-sm">{data.status}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white_90">
                        Release Date:
                      </h4>
                      <p className="text-gray_100 text-sm">
                        {moment(data.release_date).format("ll")}
                      </p>
                    </div>
                    {data?.runtime && (
                      <div>
                        <h4 className="font-semibold text-white_90">
                          Runtime:
                        </h4>
                        <p className="text-gray_100 text-sm">
                          {formatToMinHr(data.runtime)}
                        </p>
                      </div>
                    )}

                    {data?.number_of_episodes && (
                      <div>
                        <h4 className="font-semibold text-white_90">
                          Episodes:
                        </h4>
                        <p className="text-gray_100 text-sm">
                          {data.number_of_episodes}
                        </p>
                      </div>
                    )}
                  </div>

                  {directors?.length > 0 && (
                    <div className="py-3 border-b-2 border-gray_100">
                      <p>
                        <strong className="text-white_90">Directors: </strong>
                        {directors?.map((d, i) => (
                          <span className="text-sm text-gray_100" key={i}>
                            {d.original_name}
                            {directors?.length - 1 !== i && ", "}
                          </span>
                        ))}
                      </p>
                    </div>
                  )}

                  {writers?.length > 0 && (
                    <div className="py-3 border-b-2 border-gray_100">
                      <p>
                        <strong className="text-white_90">Writers: </strong>
                        {writers?.map((d, i) => (
                          <span className="text-sm text-gray_100">
                            {d.original_name}
                            {writers?.length - 1 !== i && ", "}
                          </span>
                        ))}
                      </p>
                    </div>
                  )}

                  {data?.created_by?.length > 0 && (
                    <div className="py-3 border-b-2 border-gray_100">
                      <p>
                        <strong className="text-white_90">Creator: </strong>
                        {data?.created_by?.map((d, i) => (
                          <span className="text-sm text-gray_100">
                            {d.name}
                            {data?.created_by?.length - 1 !== i && ", "}
                          </span>
                        ))}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-transparent to-bg_primary w-full h-[500px] absolute bottom-0 left-0 z-[-1]"></div>

            <Player
              show={show}
              setShow={setShow}
              videoId={videoId}
              setVideoId={setVideoId}
            />
          </div>
        )
      )}

      {/* top casts */}

      <TopCast credits={credits} creditsLoading={creditsLoading} />
      <OfficialVideos
        videos={videos?.results}
        videoLoading={videoLoading}
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />

      <CategorySlider
        data={similar?.results}
        title={`Similar ${mediaType === "movie" ? "Movies" : "Tv Shows"}`}
        endpoint={mediaType}
        loading={similarLoading}
      />
      <CategorySlider
        data={recommendations?.results}
        title={`Recommendations`}
        endpoint={mediaType}
        loading={recommendationsLoading}
      />
    </div>
  );
};

export default DetailsContents;
