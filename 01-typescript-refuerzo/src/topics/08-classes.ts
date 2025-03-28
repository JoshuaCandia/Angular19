export class Person {
  constructor(
    public name: string,
    public lastName: string,
    public address: string = "No address"
  ) {
    this.name = name;
    this.lastName = lastName;
    this.address = address;
  }
}

const ironman = new Person("Tony", "Stark");
console.log(ironman);

export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public person: Person
  ) {
    /*     this.person = new Person(realName, "New York"); */
  }
}

const brucePerson = new Person("Bruce", "Wayne", "Gotham");
const batman = new Hero("Batman", 35, brucePerson);

console.log(batman);
