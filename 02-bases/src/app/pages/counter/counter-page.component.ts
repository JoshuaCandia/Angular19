import { Component } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
})
export class CounterPageComponent {
  counter = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }
  decreaseBy(value: number): void {
    if (this.counter === 0) return;
    this.counter -= value;
  }

  reset(): void {
    this.counter = 10;
  }
}
