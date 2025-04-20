import { detailsAction } from "@/actions";
import {
  normalizeMovieDetailsData,
  normalizeTVDetailsData,
} from "@/helpers/normalizeDetailsData";
import { MovieDetailsResponse } from "@/types/movie-deital-types";
import { NormalizedDetailsResponse } from "@/types/normalized-details";
import { ShowType } from "@/types/show-types";
import { TVDetailsResponse } from "@/types/tv-detail-types";
import { useState, useEffect } from "react";

function useDetails(type: ShowType, id: string) {
  const [data, setData] = useState<NormalizedDetailsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(false);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    setError(false);
    setData(null);

    async function fetchData() {
      try {
        const response = await detailsAction(type, id);

        if (isMounted) {
          if (response.error) {
            setError(response);
            setData(null);
            setLoading(false);
            return;
          }

          if (response.data) {
            if (type === ShowType.MOVIE) {
              setData(
                normalizeMovieDetailsData(response.data as MovieDetailsResponse)
              );
            } else {
              setData(
                normalizeTVDetailsData(response.data as TVDetailsResponse)
              );
            }
          }

          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [type, id]);

  return { data, loading, error };
}

export default useDetails;
