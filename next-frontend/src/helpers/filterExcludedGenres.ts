import { Genre } from "@/types/genre-types";

export function filterExcludedGenres(
  genresList: Genre[],
  genresListToExclude: string[]
) {
  return genresList.filter((genre) =>
    genresListToExclude.some((name) =>
      genre.name.toLowerCase().includes(name.toLowerCase())
    )
  );
}
