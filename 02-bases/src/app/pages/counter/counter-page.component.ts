import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
})
export class CounterPageComponent {
  counter: number = 10;
  counterSignal = signal<number>(10);

  constructor() {}

  increaseBy(value: number): void {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }
  decreaseBy(value: number): void {
    if (this.counter === 0) return;
    this.counter -= value;
    this.counterSignal.update((current) => current - value);
  }

  reset(): void {
    this.counter = 10;
    this.counterSignal.set(10);
  }
}
