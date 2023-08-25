import React, { useEffect, useState } from "react";
import styles from "../../utils/styles";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { useFetch } from "../hooks";
import { fetchDataFromApi } from "../../api/api";
import MovieCart from "../MovieCart";
import InfiniteScroll from "react-infinite-scroll-component";

const Explore = () => {
  const [_genres, setGenres] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pageNum, setpageNum] = useState(1);
  const { mediaType } = useParams();

  const { data: genres } = useFetch(`/genre/${mediaType}/list`);

  let filters = {};

  useEffect(() => {
    setGenres(
      genres?.genres?.map((g) => {
        return { value: g.id, label: g.name };
      })
    );
  }, [genres]);

  const sortOptions = [
    { value: "popularity.desc", label: "Popularity Descending" },
    { value: "popularity.asc", label: "Popularity Ascending" },
    { value: "vote_average.desc", label: "Rating Descending" },
    { value: "vote_average.asc", label: "Rating Ascending" },
    { value: "primary_release_date.desc", label: "Release Descending" },
    { value: "primary_release_date.asc", label: "Release Ascending" },
    // Add more options
  ];

  const fatchData = () => {
    setLoading(true);
    fetchDataFromApi(`/discover/${mediaType}`, filters).then((res) => {
      setData(res);
      setpageNum((prev) => prev + 1);
      setLoading(false);
    });
  };

  const handleChange = (selectedItems, action) => {
    if (action.name === "genres") {
      if (action.action !== "clear") {
        let ids = selectedItems.map((item) => item.value).toString();
        filters.with_genres = ids;
      } else {
        delete filters.with_genres;
      }
    }

    if (action.name === "sort") {
      if (action.action !== "clear") {
        filters.sort_by = selectedItems.value;
      } else {
        delete filters.with_genres;
      }
    }

    fatchData();
    setpageNum(1);
  };

  const fetchNextPageData = () => {
    fetchDataFromApi(`/discover/${mediaType}?page=${pageNum}`, filters).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setpageNum((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    filters = {};
    setData(null);
    setpageNum(1);
    fatchData();
  }, [mediaType]);

  return (
    <div className={`${styles.pagePaddingtop} ${styles.paddingX}`}>
      <div className="container">
        <div className="flex justify-between pt-10 flex-col sm:flex-row gap-5">
          <h2 className="text-gradient text-3xl font-semibold">
            Explore {mediaType === "movie" ? "Movies" : "Tv Shows"}
          </h2>
          <div className="flex-1 flex flex-col gap-4 items-center justify-end sm:flex-row">
            <Select
              name="genres"
              options={_genres?.slice(0, 6) || []}
              isMulti={true}
              onChange={handleChange}
              className="select w-full sm:w-auto max-w-[500px] min-w-[200px]"
              classNamePrefix={"react-select"}
              placeholder="Select Genres..."
            />
            <Select
              name="sort"
              options={sortOptions}
              onChange={handleChange}
              isMulti={false}
              className="select w-full sm:w-auto max-w-[500px] min-w-[200px]"
              classNamePrefix={"react-select"}
              placeholder="Sort by"
            />
          </div>
        </div>

        <div className="mt-12">
          {!loading ? (
            data?.results?.length > 0 ? (
              <InfiniteScroll
                className="infinite grid gap-x-4 md:gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={<div>loading</div>}
              >
                {data?.results?.map((item) => (
                  <div className="aspect-[2/3]" key={item?.id}>
                    <MovieCart {...item} endpoint={mediaType} />
                  </div>
                ))}
              </InfiniteScroll>
            ) : (
              <div>Sorry no data is available.</div>
            )
          ) : (
            <div class="flex justify-center items-center h-[60vh]">
              <div class="animate-spin rounded-full h-10 w-10 border-4 border-primary border-b-transparent"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
