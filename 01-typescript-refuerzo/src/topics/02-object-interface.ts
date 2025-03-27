let skills: string[] = ["Bash", "Counter", "Healing"];

export interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
  showHp: () => void;
}

const strider: Character = {
  name: "Strider",
  hp: 100,
  skills,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  },
};

strider.hometown = "Rivendell";
