import Component from "../component/component.js";
import type CharacterData from "../../types.js";
import { characters } from "../characters/characters.js";
import King from "../King/King.js";
import Advisor from "../Advisor/Advisor.js";
import { Squire } from "../Squire/Squire.js";
import Fighter from "../Fighter/Fighter.js";
import Character from "../Character/Character.js";

class CharacterCard extends Component {
  data: Character | Fighter | Squire | King | Advisor;

class CharacterCard extends Component {
  characterData;
  state: boolean;

  constructor(
    parentElement: Element,
    tagName: string,
    className: string,
    data: Fighter | Squire | King | Advisor | Character,
  ) {
    super(parentElement, tagName, className);

    this.characterData = data;
    this.state = this.state;

    this.data = data;
  }

  protected populate(): void {
    this.element.innerHTML = ` 
      <article class="character">
          <div class="card character__card">
            <img src="img/${this.data.characterData.imageSource}" alt="Character's Name and family" class="character__picture card-img-top ${
              this.state ? "" : "character__upside-down-picture"
            }" />
            <div class="card-body">
              <h2 class="character__name card-title h4">${this.data.characterData.name}${this.data.characterData.family}</h2>

              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Age: ${this.data.characterData.age} yrs</li>
                  <li>
                    State:
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
                <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Years of Reign: X</li>
                  <li>Weapon: XXX</li>
                  <li>Dexterity: X</li>
                  <li>Kiss Ass level: X</li>
                  <li>Advises to: X</li>
                  <li>Serves to: X</li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">speak</button>
                  <button class="character__action btn">die</button>
                </div>
              </div>
            </div>
             <i class="emoji"></i>
          </div>
        </article>
    `;
  }
}

export default CharacterCard;
