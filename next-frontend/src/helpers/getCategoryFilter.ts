import { Categories } from "@/types/category-types";
import { MovieCategories } from "@/types/movie-categories";
import { TvCategories } from "@/types/tv-categories";
import { formateDateToApi } from "./formateDateToApi";

export function getCategoryFilter(category: Categories) {
  const date = new Date();
  const newDateMax = new Date(new Date(date).setMonth(date.getMonth() + 3));
  const newDateMin = new Date(new Date(date).setMonth(date.getMonth() - 1));
  const upcomingDate = new Date(new Date(date).setDate(date.getDate() + 5));

  const upcomingMinDate = formateDateToApi(upcomingDate);
  const maxDate = formateDateToApi(newDateMax);
  const minDate = formateDateToApi(newDateMin);
  const today = formateDateToApi();

  switch (category) {
    case MovieCategories.POPULAR:
      return `sort_by=popularity.desc&release_date.lte=${today}`;
    case MovieCategories.TOP_RATED:
      return "sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200";
    case MovieCategories.NOW_PLAYING:
      return `sort_by=popularity.desc&with_release_type=2|3&primary_release_date.gte=${minDate}&primary_release_date.lte=${today}`;
    case MovieCategories.UPCOMING:
      return `sort_by=popularity.desc&with_release_type=2|3&primary_release_date.gte=${upcomingMinDate}&primary_release_date.lte=${maxDate}`;
    case TvCategories.POPULAR:
      return `sort_by=popularity.desc&release_date.lte=${today}`;
    case TvCategories.AIRING_TODAY:
      return `sort_by=popularity.desc&air_date.lte=${today}&air_date.gte=${today}`;
    case TvCategories.TOP_RATED:
      return `sort_by=vote_average.desc&vote_count.gte=200`;
    default:
      return `sort_by=popularity.desc&release_date.lte=${today}`;
  }
}
