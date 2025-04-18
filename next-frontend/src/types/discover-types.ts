export interface DiscoverResult {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  popularity: number;
  adult: boolean;
  video: boolean;
  media_type: string;
  origin_country: string[];
  episode_count: number;
  seasons: number;
  runtime: number;
  status: string;
}

export interface DiscoverResponse {
  page: number;
  results: DiscoverResult[];
  total_pages: number;
  total_results: number;
}
