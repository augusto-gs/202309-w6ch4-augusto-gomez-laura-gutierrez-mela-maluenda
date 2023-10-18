import type CharacterData from "../../types";

class Character {
  isAlive: boolean;
  series: string;
  characterData;

  constructor(characterData: CharacterData) {
    this.characterData = characterData;
  }

  communicate() {
    return `${this.characterData.name} says: `;
  }

  die() {
    this.isAlive = false;
  }
}

export default Character;
