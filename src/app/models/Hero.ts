import { Movie } from "./Movie";
import { Secret } from "./Secret";
import { Weapon } from "./Weapon";

export interface Hero {
  heroId?: number;
  name: string;
  active: boolean;
  updateDate: string;
  secret?: Secret;
  weapons?: Weapon[];
  movies?: Movie[];
}
