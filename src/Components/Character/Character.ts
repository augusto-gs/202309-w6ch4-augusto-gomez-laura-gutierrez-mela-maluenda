import type { CharacterData } from "../../types";

abstract class Character {
  protected isAlive: boolean;
  protected series: string;
  protected characterData;

  constructor(data: CharacterData) {
    this.characterData = data;
    this.isAlive = true;
    this.series = "Game of Thrones";
  }

  protected communicate(): string {
    return `${this.characterData.name} says: `;
  }

  protected die(): void {
    this.isAlive = false;
  }
}

export default Character;
