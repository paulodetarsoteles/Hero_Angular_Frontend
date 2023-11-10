import { Hero } from "./Hero";

export interface Movie {
  movieId?: number;
  name: string;
  rate: number;
  heroes?: Hero[];
}
