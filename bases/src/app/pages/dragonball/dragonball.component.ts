import { Component, signal } from '@angular/core';
import { dragonballCharacters } from '../../mocks/characters.mocks';

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css',
})
export class DragonballComponent {
  characters = signal(dragonballCharacters);
}
