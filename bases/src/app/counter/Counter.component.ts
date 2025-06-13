import { Component } from '@angular/core';
@Component({
  templateUrl: './Counter.component.html',
  styleUrls: ['./Counter.component.css'],
})
export class CounterComponent {
  counter = 0;
  increment() {
    this.counter++;
  }
  decrement() {
    if (this.counter <= 0) {
      return;
    }
    this.counter--;
  }
  reset() {
    this.counter = 0;
  }
}
