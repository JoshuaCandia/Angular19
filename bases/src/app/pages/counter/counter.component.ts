import { Component, signal } from '@angular/core';
@Component({
  templateUrl: './Counter.component.html',
  styleUrls: ['./Counter.component.css'],
})
export class CounterComponent {
  counter = 0;
  counterSignal = signal(10);

  increment() {
    this.counter++;

    this.counterSignal.update((value) => value + 1);
  }

  decrement() {
    this.counter--;

    this.counterSignal.update((value) => value - 1);
  }
  reset() {
    this.counter = 0;
    this.counterSignal.set(10);
  }
}
