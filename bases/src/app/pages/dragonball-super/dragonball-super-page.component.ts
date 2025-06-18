import { Component, signal } from '@angular/core';
import { dragonballCharacters } from '../../mocks/characters.mocks';
import { DragonballCharacter } from '../../types/characters.types';

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css',
})
export class DragonballComponent {
  characters = signal(dragonballCharacters);
  name = signal('Gohan');
  power = signal(100);

  addCharacter() {
    console.log('Adding character:', this.name(), this.power());
    if (!this.name() || !this.power() || this.power() <= 0) {
      console.error('Name and power are required to add a character.');
      return;
    }
    const newCharacter: DragonballCharacter = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
      description: 'New character added',
    };
    this.characters.update((current) => [...current, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
