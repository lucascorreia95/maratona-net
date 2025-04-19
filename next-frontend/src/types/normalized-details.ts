export interface NormalizedDetailsResponse {
  id: number;
  title: string;
  date: string;
  image: string;
  rating: number;
  backdrop_path: string;
  genres: string[];
  overview: string | null;
  homepage: string;
  cast?:
    | {
        id: number;
        name: string;
        image: string;
      }[]
    | undefined;
}
