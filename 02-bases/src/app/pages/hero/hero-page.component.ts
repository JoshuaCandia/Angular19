import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
@Component({
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css'],
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  public name = signal<string>('ironman');
  public age = signal<number>(45);
  public heroDescription = computed(() => `${this.name()} - ${this.age()}`);
  public capitalizedName = computed(() => this.name().toUpperCase());

  changeHero() {
    this.name.set('spiderman');
    this.age.set(22);
  }
  resetForm() {
    this.name.set('ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }
}
