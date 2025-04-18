import { discoverAction } from "@/actions";
import { normalizeData } from "@/helpers/normalizeData";
import { Categories } from "@/types/category-types";
import { NormalizedDiscoverResponse } from "@/types/normalized-discover";
import { ShowType } from "@/types/show-types";
import { useState, useEffect } from "react";

function useDiscover(type: ShowType, category: Categories) {
  const [data, setData] = useState<NormalizedDiscoverResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(false);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    setError(false);
    setData(null);

    async function fetchData() {
      try {
        const response = await discoverAction(type, category);

        if (isMounted) {
          if (response.error) {
            setError(response);
            setData(null);
            setLoading(false);
            return;
          }

          if (response.data) {
            setData(normalizeData(response.data));
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
  }, [type, category]);

  return { data, loading, error };
}

export default useDiscover;
