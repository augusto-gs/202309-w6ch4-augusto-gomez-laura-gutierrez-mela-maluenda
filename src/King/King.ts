import Character from "../Components/Character/Character.js";
import type CharacterData from "../types/types.js";

export class King extends Character {
  yearsOfReign: number;

  constructor(characterData: CharacterData, yearsOfReign: number) {
    super(characterData);
    this.yearsOfReign = yearsOfReign;
  }

  communicate(): string {
    return `${super.communicate()}Everybody will die`;
  }
}
