import { formatDate } from "./formateDate";
import { SearchResponse } from "@/types/search-types";
import { NormalizedSearchResponse } from "@/types/normalized-search";
import { ShowType } from "@/types/show-types";

export function normalizeSearch(
  data: SearchResponse
): NormalizedSearchResponse {
  const allowedMediaTypes = ["tv", "movie"];

  const normalizedData = data.results
    .filter((item) => allowedMediaTypes.includes(item.media_type))
    .map((item) => {
      const {
        id,
        title,
        name,
        poster_path,
        backdrop_path,
        vote_average,
        media_type,
      } = item;
      const imageUrl = `https://image.tmdb.org/t/p/w300${
        poster_path || backdrop_path
      }`;
      const date = item.first_air_date || item.release_date;

      return {
        id: id,
        title: name! || title!,
        date: formatDate(date!),
        image: imageUrl,
        rating: +vote_average.toFixed(2),
        type: media_type as ShowType,
      };
    });

  return {
    results: normalizedData,
    total_pages: data.total_pages,
    total_results: data.total_results,
    page: data.page,
  };
}
