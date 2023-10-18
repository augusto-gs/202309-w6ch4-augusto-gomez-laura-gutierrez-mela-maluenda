import { type Fighter } from "./Components/Fighter/Fighter";

export interface CharacterData {
  name: string;
  family: string;
  age: number;
  imageURL: string;
}

export interface KingData extends CharacterData {
  yearsOfReign: number;
}

export interface FighterData extends CharacterData {
  weapon: string;
  dexterity: number;
}

export interface SquireData extends CharacterData {
  kissAssLevel: number;
  serves: Fighter;
}
