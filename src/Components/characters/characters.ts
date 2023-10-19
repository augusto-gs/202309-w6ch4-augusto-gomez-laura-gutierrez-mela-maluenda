import King from "../King/King.js";
import Fighter from "../Fighter/Fighter.js";
import Advisor from "../Advisor/Advisor.js";
import { Squire } from "../Squire/Squire.js";

const joffreyCharacterData = {
  id: 1,
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: "joffrey.jpg",
};

const jaimeCharacterData = {
  id: 2,
  name: "Jaime",
  family: "Lannister",
  age: 45,
  imageSource: "jaime.jpg",
};


const daenerysCharacterData = {
  id: 3,
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  imageSource: "daenerys.jpg",
};


const tyrionCharacterData = {
  id: 4,
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  imageSource: "tyrion.jpg",
};


const bronnCharacterData = {
  id: 5,
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  imageSource: "bronn.jpg",
};


const jaime = new Fighter(jaimeCharacterData, "sword", 7);
const joffrey = new King(joffreyCharacterData, 2);
const bronn = new Squire(bronnCharacterData, 0, jaime);
const daenerys = new Fighter(daenerysCharacterData, "Dragons", 10);
const tyrion = new Advisor(tyrionCharacterData, daenerys);

export const characters = [jaime, joffrey, daenerys, tyrion, bronn];
