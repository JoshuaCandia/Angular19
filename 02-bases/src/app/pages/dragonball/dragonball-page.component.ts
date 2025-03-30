import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
})
export class DragonballPageComponent {
  name = signal<string | null>(null);
  power = signal<number | null>(null);
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 10000,
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 9000,
    },
    {
      id: 3,
      name: 'Gohan',
      power: 8000,
    },
    {
      id: 3,
      name: 'Yamcha',
      power: 500,
    },
  ]);
  powerClasses = computed(() => {
    return {
      'text-danger': true,
    };
  });

  addCharacter() {
    if (this.name() === null || this.power() === null)
      return alert('Faltan datos');
    if (this.characters().find((character) => character.name === this.name()))
      return alert('El personaje ya existe');
    this.characters.update((characters) => [
      ...characters,
      {
        id: characters.length + 1,
        name: this.name() as string,
        power: this.power() as number,
      },
    ]);
    console.log(this.characters());
  }
}
