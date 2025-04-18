import { DiscoverResponse } from "@/types/discover-types";
import { NormalizedDiscoverResponse } from "@/types/normalized-discover";
import { formatDate } from "./formateDate";

export function normalizeData(
  data: DiscoverResponse
): NormalizedDiscoverResponse {
  const normalizedData = data.results.map((item) => {
    const { id, title, name, poster_path, backdrop_path, vote_average } = item;
    const imageUrl = `https://image.tmdb.org/t/p/w300${
      poster_path || backdrop_path
    }`;
    const date = item.first_air_date || item.release_date;

    return {
      id: id,
      title: name || title,
      date: formatDate(date),
      image: imageUrl,
      rating: +vote_average.toFixed(2),
    };
  });

  return {
    results: normalizedData,
    total_pages: data.total_pages,
    total_results: data.total_results,
    page: data.page,
  };
}
