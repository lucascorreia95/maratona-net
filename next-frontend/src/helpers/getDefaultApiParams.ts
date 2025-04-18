import { ShowType } from "@/types/show-types";

export function getDefaultApiParams(type: ShowType): string {
  if (type === ShowType.MOVIE) {
    return "?include_adult=false&include_video=false&language=pt-BR&page=1";
  } else {
    return "?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&vote_count.gte=100";
  }
}
