"use server";

import { getDefaultApiParams } from "@/helpers/getDefaultApiParams";
import { DiscoverResponse } from "@/types/discover-types";
import { ShowType } from "@/types/show-types";
import { genreAction } from "./genre";
import { filterGenres } from "@/helpers/filterGenres";
import { getCategoryFilter } from "@/helpers/getCategoryFilter";
import { Categories } from "@/types/category-types";
import { tvGenresToExclude } from "@/constants/tv-genres-to-exclude";
import { cartoonGenresToInclude } from "@/constants/cartoon-genres-to-include";

const discoverAction = async (type: ShowType, category: Categories) => {
  "use server";

  const defaultParams = getDefaultApiParams(type);
  const categoryFilter = getCategoryFilter(category, type);
  const path = type === ShowType.MOVIE ? "movie" : "tv";
  let excludedGenres;
  let includeGenres;

  if (type === ShowType.TV || type === ShowType.CARTOON) {
    const genresResponse = await genreAction(path);

    if (genresResponse.error) {
      return {
        error: true,
        status: genresResponse.status,
        message: "Failed to fetch data",
        data: null,
      };
    }

    const genres = genresResponse?.data?.genres || [];

    if (type === ShowType.TV) {
      excludedGenres = filterGenres(genres, tvGenresToExclude);
    } else {
      includeGenres = filterGenres(genres, cartoonGenresToInclude);
    }
  }

  const urlToFetch = `${
    process.env.BASE_API_URL
  }/discover/${path}${defaultParams}${
    excludedGenres ? `&without_genres=${excludedGenres}` : ""
  }${includeGenres ? `&with_genres=${includeGenres}` : ""}
  &${categoryFilter}`;

  const response = await fetch(urlToFetch, {
    method: "GET",
    cache: "force-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    return {
      error: true,
      status: response.status,
      message: "Failed to fetch data",
      data: null,
    };
  }

  const data: DiscoverResponse = await response.json();

  return {
    error: false,
    status: response.status,
    message: null,
    data,
  };
};

export { discoverAction };
