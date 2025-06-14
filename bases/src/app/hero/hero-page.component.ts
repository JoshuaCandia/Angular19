import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  styleUrls: ['./hero-page.component.css'],
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => `${this.name()} - ${this.age()}`);
  capitalizeName = computed(() => this.name().toUpperCase());

  getHeroDescription() {
    return `El nombre del superhéroe es ${this.name()} y tiene ${this.age()} años`;
  }

  changeHero = (): void => {
    this.name.set('Spiderman');
    this.age.set(22);
  };

  resetForm = (): void => {
    this.name.set('Ironman');
    this.age.set(45);
  };

  changeAge = (): void => this.age.set(60);

  capitalizeNameFunction = (name: string): string => name.toUpperCase();
}
