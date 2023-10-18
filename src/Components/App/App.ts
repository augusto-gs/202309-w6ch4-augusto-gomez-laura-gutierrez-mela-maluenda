import CharacterCard from "../CharacterCard/CharacterCard.js";
import { characters } from "../characters/characters.js";
import Component from "../component/component.js";

class App extends Component {
  protected populate(): void {
    this.element.innerHTML = `<ul class="characters-list row list-unstyled">
    </ul>
    
    `;
    const parentCard = document.querySelector(".characters-list")!;
    const cardJoffrey = new CharacterCard(
      parentCard,
      "li",
      "col",
      characters[0].characterData,
    );
    cardJoffrey.render();

    const cardJaime = new CharacterCard(
      parentCard,
      "li",
      "col",
      characters[1].characterData,
    );
    cardJaime.render();

    const cardDaenerys = new CharacterCard(
      parentCard,
      "li",
      "col",
      characters[2].characterData,
    );
    cardDaenerys.render();

    const cardTyron = new CharacterCard(
      parentCard,
      "li",
      "col",
      characters[3].characterData,
    );
    cardTyron.render();

    const cardBronn = new CharacterCard(
      parentCard,
      "li",
      "col",
      characters[4].characterData,
    );
    cardBronn.render();
  }
}

export default App;
