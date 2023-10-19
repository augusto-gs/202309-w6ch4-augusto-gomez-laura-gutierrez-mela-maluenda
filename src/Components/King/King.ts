import Character from "../Character/Character.js";
import type CharacterData from "../../types.js";

class King extends Character {
  yearsOfReign: number;

  constructor(data: CharacterData, yearsOfReign: number) {
    super(data);
    this.yearsOfReign = yearsOfReign;
  }

  communicate(): string {
    return `${super.communicate()}Everybody will die`;
  }
}

export default King;
