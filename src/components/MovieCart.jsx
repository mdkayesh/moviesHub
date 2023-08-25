import React from "react";
import { Link } from "react-router-dom";
import Img from "./img/Img";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import Rating from "./Rating";
import placeholder from "../assets/placeholder.png";

const MovieCart = (props) => {
  const { configUrls } = useSelector((state) => state.homeSlice);

  const {
    poster_path,
    original_title,
    release_date,
    original_name,
    vote_average,
    media_type,
    endpoint,
    id,
  } = props;

  const date = moment(release_date).format("ll");

  return (
    <div>
      <Link
        to={`/${media_type || endpoint}/${id}`}
        className="rounded-lg overflow-hidden relative"
      >
        <div className="relative aspect-[2/3]">
          <Img
            src={poster_path ? configUrls?.poster + poster_path : placeholder}
            alt={original_title || original_name}
            className={"rounded-lg"}
          />

          <div className="absolute -bottom-2 left-2">
            <Rating voteAverage={vote_average} />
          </div>
        </div>

        <h4 className="mt-3 text-white_90 line-clamp-1 text-sm font-semibold">
          {original_title || original_name}
        </h4>
        <p className="text-xs mt-1 text-gray_100">{date}</p>
      </Link>
    </div>
  );
};

export default MovieCart;
