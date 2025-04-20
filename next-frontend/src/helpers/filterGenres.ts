import { Genre } from "@/types/genre-types";

export function filterGenres(
  genresList: Genre[],
  genresListToFilter: string[]
) {
  return genresList
    .filter((genre) =>
      genresListToFilter.some((name) =>
        genre.name.toLowerCase().includes(name.toLowerCase())
      )
    )
    .map((genre) => genre.id)
    .join(",");
}
