import { formatDate } from "./formateDate";
import { MovieDetailsResponse } from "@/types/movie-deital-types";
import { NormalizedDetailsResponse } from "@/types/normalized-details";
import { TVDetailsResponse } from "@/types/tv-detail-types";

export function normalizeMovieDetailsData(
  data: MovieDetailsResponse
): NormalizedDetailsResponse {
  const imageUrl = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
  const backdropUrl = `https://image.tmdb.org/t/p/w1920${data.backdrop_path}`;

  return {
    id: data.id,
    title: data.title,
    date: formatDate(data.release_date),
    backdrop_path: backdropUrl,
    image: imageUrl,
    rating: +data.vote_average.toFixed(2),
    genres: data.genres.map((genre) => genre.name),
    overview: data.overview,
    homepage: data.homepage,
    cast: data?.credits?.cast.map((member) => ({
      id: member.id,
      name: member.name,
      image: `https://image.tmdb.org/t/p/w500${member.profile_path}`,
    })),
  };
}

export function normalizeTVDetailsData(
  data: TVDetailsResponse
): NormalizedDetailsResponse {
  const imageUrl = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
  const backdropUrl = `https://image.tmdb.org/t/p/w1920${data.backdrop_path}`;

  return {
    id: data.id,
    title: data.name,
    date: formatDate(data.first_air_date),
    backdrop_path: backdropUrl,
    image: imageUrl,
    rating: +data.vote_average.toFixed(2),
    genres: data.genres.map((genre) => genre.name),
    overview: data.overview,
    homepage: data.homepage,
    cast: data?.credits?.cast.map((member) => ({
      id: member.id,
      name: member.name,
      image: `https://image.tmdb.org/t/p/w500${member.profile_path}`,
    })),
  };
}
