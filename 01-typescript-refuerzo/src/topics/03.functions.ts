import { Character } from "./02-object-interface";

function addNumbers(a: number, b: number): number {
  return a + b;
}

const sum = addNumbers(1, 2);
console.log(sum);

function addNumbersOptional(a: number, b: number): number {
  return a + b;
}

const sumOptional = addNumbersOptional(1, 2);
console.log(sumOptional);

function addNumbersDefault(a: number, b: number = 10): number {
  return a + b;
}

const sumDefault = addNumbersDefault(1);
console.log(sumDefault);

const multiply = (a: number, b: number) => a * b;

const multiplyResult = multiply(1, 2);
console.log(multiplyResult);

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
  name: "Strider",
  hp: 50,
  skills: ["Bash", "Counter"],
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  },
};

healCharacter(strider, 20);

strider.showHp();
