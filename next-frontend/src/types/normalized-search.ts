import { ShowType } from "./show-types";

export interface NormalizedSearchResult {
  id: number;
  title: string;
  date: string;
  image: string;
  rating: number;
  type: ShowType;
}

export interface NormalizedSearchResponse {
  page: number;
  results: NormalizedSearchResult[];
  total_pages: number;
  total_results: number;
}
