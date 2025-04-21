import { ShowType } from "./show-types";

export interface FavoriteTypes {
  id: number;
  title: string;
  date: string;
  image: string;
  rating: number;
  type: ShowType;
}
