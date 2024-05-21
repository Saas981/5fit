import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count: number = 0;
  displayedCount: number = 0;
  translateY: number = 0;

  constructor() {
    this.updateDisplayedCount();
  }

  updateDisplayedCount() {
    this.displayedCount = Math.floor(this.count);
    this.translateY = (this.count % 1) * 100;
  }

  increment() {
    this.count += 1;
    this.updateDisplayedCount();
  }

  decrement() {
    this.count -= 1;
    this.updateDisplayedCount();
  }
}
