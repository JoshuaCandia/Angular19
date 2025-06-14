import { Component, signal } from '@angular/core';

interface DragonballCharacter {
  id: number;
  name: string;
  power?: number;
  description: string;
}

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css',
})
export class DragonballComponent {
  characters = signal<DragonballCharacter[]>([
    {
      id: 1,
      name: 'Goku',
      power: 9001,
      description: 'The main protagonist of the series, a Saiyan warrior.',
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 8500,
      description:
        'The prince of the Saiyans, known for his pride and rivalry with Goku.',
    },
    {
      id: 3,
      name: 'Gohan',
      power: 7000,
      description:
        'Goku’s eldest son, known for his potential and intelligence.',
    },
    {
      id: 4,
      name: 'Piccolo',
      power: 6000,
      description:
        'A Namekian warrior who becomes one of Goku’s closest allies.',
    },
    {
      id: 5,
      name: 'Freezer',
      power: 10000,
      description:
        'One of the main antagonists, known for his ruthlessness and power.',
    },
  ]);
}
