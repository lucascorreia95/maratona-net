import { ShowType } from "./show-types";

export interface MediaTypes {
  id: number;
  title: string;
  date: string;
  image: string;
  rating: number;
  type: ShowType;
}
