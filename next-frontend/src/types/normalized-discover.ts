export interface NormalizedDiscoverResult {
  id: number;
  title: string;
  date: string;
  image: string;
  rating: number;
}

export interface NormalizedDiscoverResponse {
  page: number;
  results: NormalizedDiscoverResult[];
  total_pages: number;
  total_results: number;
}
