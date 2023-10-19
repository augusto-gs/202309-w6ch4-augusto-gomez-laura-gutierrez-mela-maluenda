import Character from "../Character/Character.js";
import Fighter from "../Fighter/Fighter.js";
import type CharacterData from "../../types.js";

export class Squire extends Character {
  kissAssLevel: number;
  serves: Fighter;

  constructor(data: CharacterData, KissAssLevel: number, serves: Fighter) {
    super(data);
    this.kissAssLevel = this.kissAssLevelFilter(this.kissAssLevel);

    if (this.serves instanceof Fighter) {
      this.serves = serves;
    }
  }

  communicate(): string {
    return `${super.communicate()}I'm a loser`;
  }

  kissAssLevelFilter(kissAssLevel: number): number {
    if (kissAssLevel < 0) {
      return 0;
    }

    if (kissAssLevel > 10) {
      return 10;
    }

    return kissAssLevel;
  }
}
