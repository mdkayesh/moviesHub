import React from "react";
import styles from "../../utils/styles";
import { useFetch } from "../hooks";
import { useParams } from "react-router-dom";
import DetailsContents from "../sections/details/DetailsContents";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  const { data: videos, loading: videoLoading } = useFetch(
    `/${mediaType}/${id}/videos`
  );
  const { data: similar, loading: similarLoading } = useFetch(
    `/${mediaType}/${id}/similar`
  );
  const { data: recommendations, loading: recommendationsLoading } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );

  return (
    <DetailsContents
      loading={loading}
      data={data}
      credits={credits}
      creditsLoading={creditsLoading}
      videos={videos}
      videoLoading={videoLoading}
      similar={similar}
      similarLoading={similarLoading}
      recommendations={recommendations}
      recommendationsLoading={recommendationsLoading}
    />
  );
};

export default Details;
