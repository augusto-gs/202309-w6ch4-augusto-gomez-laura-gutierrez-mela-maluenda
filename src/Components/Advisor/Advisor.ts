import Character from "../Character/Character.js";
import type CharacterData from "../../types.js";
import Fighter from "../Fighter/Fighter.js";

class Advisor extends Character {
  advises: Character;

  constructor(data: CharacterData, advises: Fighter) {
    super(data);

    if (this.advises instanceof Fighter) {
      this.advises = advises;
    }
  }

  communicate(): string {
    return `${super.communicate()}I have a funny feeling that I'm going to die`;
  }
}

export default Advisor;
