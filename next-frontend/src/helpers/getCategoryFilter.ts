import { formateDateToApi } from "./formateDateToApi";
import { ShowType } from "@/types/show-types";
import { MovieCategories } from "@/types/movie-categories";
import { TvCategories } from "@/types/tv-categories";
import { CartoonCategories } from "@/types/cartoon-categories";

const today = formateDateToApi();
const monthAgo = formateDateToApi(
  new Date(new Date().setMonth(new Date().getMonth() - 1))
);
const threeMonthsAhead = formateDateToApi(
  new Date(new Date().setMonth(new Date().getMonth() + 3))
);
const fiveDaysAhead = formateDateToApi(
  new Date(new Date().setDate(new Date().getDate() + 5))
);

const movieCategoryFilters: Record<MovieCategories, string> = {
  [MovieCategories.POPULAR]: `sort_by=popularity.desc&release_date.lte=${today}`,
  [MovieCategories.TOP_RATED]:
    "sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200",
  [MovieCategories.NOW_PLAYING]: `sort_by=popularity.desc&with_release_type=2|3&primary_release_date.gte=${monthAgo}&primary_release_date.lte=${today}`,
  [MovieCategories.UPCOMING]: `sort_by=popularity.desc&with_release_type=2|3&primary_release_date.gte=${fiveDaysAhead}&primary_release_date.lte=${threeMonthsAhead}`,
};

const tvCategoryFilters: Record<TvCategories, string> = {
  [TvCategories.POPULAR]: `sort_by=popularity.desc&release_date.lte=${today}`,
  [TvCategories.AIRING_TODAY]: `sort_by=popularity.desc&air_date.lte=${today}&air_date.gte=${today}`,
  [TvCategories.TOP_RATED]: `sort_by=vote_average.desc&vote_count.gte=200`,
};

const cartoonCategoryFilters: Record<CartoonCategories, string> = {
  [CartoonCategories.POPULAR]: `sort_by=popularity.desc&release_date.lte=${today}`,
  [CartoonCategories.TOP_RATED]: `sort_by=vote_average.desc&vote_count.gte=200`,
};

const defaultFilter = `sort_by=popularity.desc&release_date.lte=${today}`;

type ValidCategory = MovieCategories | TvCategories | CartoonCategories;

export function getCategoryFilter(
  category: ValidCategory,
  type: ShowType
): string {
  switch (type) {
    case ShowType.MOVIE:
      return movieCategoryFilters[category as MovieCategories] || defaultFilter;
    case ShowType.TV:
      return tvCategoryFilters[category as TvCategories] || defaultFilter;
    default:
      return (
        cartoonCategoryFilters[category as CartoonCategories] || defaultFilter
      );
  }
}
