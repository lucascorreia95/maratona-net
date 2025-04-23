import { searchAction } from "@/actions/search";
import { normalizeSearch } from "@/helpers/normalizeSearch";
import { NormalizedSearchResponse } from "@/types/normalized-search";
import { useState, useEffect } from "react";

function useSearch(query: string | undefined) {
  const [data, setData] = useState<NormalizedSearchResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(false);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    setError(false);
    setData(null);

    async function fetchData() {
      try {
        if (!query) {
          setData(null);
          setLoading(false);
          setError(false);
          return;
        }

        const response = await searchAction(query);

        if (isMounted) {
          if (response.error) {
            setError(response);
            setData(null);
            setLoading(false);
            return;
          }

          if (response.data) {
            setData(normalizeSearch(response.data));
          }
        }

        setLoading(false);
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
  }, [query]);

  return { data, loading, error };
}

export default useSearch;
