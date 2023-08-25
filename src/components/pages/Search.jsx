import React, { useEffect, useState } from "react";
import styles from "../../utils/styles";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../api/api";
import MovieCart from "../MovieCart";
import InfiniteScroll from "react-infinite-scroll-component";

const Search = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const fetchData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${1}`).then((res) => {
      setData(res);
      setLoading(false);
    });
  };

  const fetchNextPageData = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum + 1}`).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data?.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setPageNum((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    setPageNum(1);
    fetchData();
  }, [query]);

  return (
    <section className={`${styles.pagePaddingtop} ${styles.paddingX}`}>
      <div className="container">
        <div className="pt-16">
          {!loading ? (
            data?.results?.length > 0 ? (
              <InfiniteScroll
                className="infinite grid gap-x-4 md:gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={
                  <div className="h-screen w-full flex justify-center items-center">
                    loading...
                  </div>
                }
              >
                {data?.results?.map((item) => {
                  if (item.media_type === "person") return;
                  return (
                    <div className="aspect-[3/2]" key={item?.id}>
                      <MovieCart {...item} />
                    </div>
                  );
                })}
              </InfiniteScroll>
            ) : (
              <div className="h-screen w-full flex justify-center items-center text-xl md:text-2xl">
                Sorry, Results not found!
              </div>
            )
          ) : (
            <div class="flex justify-center items-center h-[60vh]">
              <div class="animate-spin rounded-full h-10 w-10 border-4 border-primary border-b-transparent"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;
