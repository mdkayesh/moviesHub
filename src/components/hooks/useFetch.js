import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../api/api";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    fetchDataFromApi(url)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
