import { Hero } from "./Hero";

export interface Weapon {
  weaponId?: number;
  name: string;
  heroId?: number;
  hero?: Hero;
}
