import Component from "../component/component.js";
import type CharacterData from "../../types.js";
import Character from "../Character/Character.js";

class CharacterCard extends Component {
  characterData;
  state: boolean;

  constructor(
    parentElement: Element,
    tagName: string,
    className: string,
    data: CharacterData,
  ) {
    super(parentElement, tagName, className);
    this.characterData = data;
    this.state = this.state;
  }

  protected populate(): void {
    this.element.innerHTML = ` 
      <article class="character">
          <div class="card character__card">
            <img src="img/${
              this.characterData.imageSource
            }" alt="Character's Name and family" class="character__picture card-img-top" ${
              this.state ? "" : "character__upside-down-picture"
            } } />
            <div class="card-body">
              <h2 class="character__name card-title h4">${
                this.characterData.name
              }${this.characterData.family}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Age: ${this.characterData.age} yrs</li>
                  <li>
                    State:
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
    `;
  }
}

export default CharacterCard;
