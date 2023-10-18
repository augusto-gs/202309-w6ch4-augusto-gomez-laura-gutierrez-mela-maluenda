import King from "../King/King";
import Fighter from "../Fighter/Fighter";
import Advisor from "../Advisor/Advisor";
import { Squire } from "../Squire/Squire";

const joffreyCharacterData = {
  id: 1,
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: "joffrey.jpg",
  yearsOfReign: 2,
};
const joffrey = new King(joffreyCharacterData, 2);

const jaimeCharacterData = {
  id: 2,
  name: "Jaime",
  family: "Lannister",
  age: 45,
  imageSource: "jaime.jpg",
  weapon: "sword",
  dexterity: 7,
};

const jaime = new Fighter(jaimeCharacterData, "sword", 7);

const daenerysCharacterData = {
  id: 3,
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  imageSource: "daenerys.jpg",
  weapon: "Dragons",
  dexterity: 10,
};

const daenerys = new Fighter(daenerysCharacterData, "Dragons", 10);

const tyrionCharacterData = {
  id: 4,
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  imageSource: "tyrion.jpg",
  advises: daenerys,
};

const tyrion = new Advisor(tyrionCharacterData);

const bronnCharacterData = {
  id: 5,
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  imageSource: "bronn.jpg",
  kissAssLevel: 0,
  serves: jaime,
};
const bronn = new Squire(bronnCharacterData);

export const characters = [jaime, joffrey, daenerys, tyrion, bronn];
