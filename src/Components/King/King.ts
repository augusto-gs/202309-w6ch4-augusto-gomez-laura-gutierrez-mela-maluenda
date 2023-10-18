import Character from "../Character/Character.js";
import { type KingData } from "../../types.js";

export class King extends Character {
  yearsOfReign;

  constructor(data: KingData, yearsOfReign: number) {
    super(data);
    this.yearsOfReign = yearsOfReign;
  }

  communicate(): string {
    return `${super.communicate()}Everybody will die`;
  }
}
