"use server";

import { getDefaultApiParams } from "@/helpers/getDefaultApiParams";
import { DiscoverResponse } from "@/types/discover-types";
import { ShowType } from "@/types/show-types";
import { genreAction } from "./genre";
import { filterExcludedGenres } from "@/helpers/filterExcludedGenres";
import { tvGenresToExclude } from "@/constants/tv-genres-to-exclude";
import { getCategoryFilter } from "@/helpers/getCategoryFilter";
import { Categories } from "@/types/category-types";

const discoverAction = async (type: ShowType, category: Categories) => {
  "use server";

  const defaultParams = getDefaultApiParams(type);
  const categoryFilter = getCategoryFilter(category);
  let excludedGenres;

  if (type === ShowType.TV) {
    const genresResponse = await genreAction(type);

    if (genresResponse.error) {
      return {
        error: true,
        status: genresResponse.status,
        message: "Failed to fetch data",
        data: null,
      };
    }

    const genres = genresResponse?.data?.genres || [];

    excludedGenres = filterExcludedGenres(genres, tvGenresToExclude)
      .map((genre) => genre.id)
      .join(",");
  }

  const response = await fetch(
    `${process.env.BASE_API_URL}/discover/${type}${defaultParams}${
      excludedGenres ? `&without_genres=${excludedGenres}` : ""
    } &${categoryFilter}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
      },
    }
  );

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
