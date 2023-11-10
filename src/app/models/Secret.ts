import { Hero } from "./Hero";

export interface Secret {
  secretId?: number;
  name: string;
  heroId?: number;
  hero?: Hero;
}
