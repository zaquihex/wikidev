import {Component, Input, OnInit} from '@angular/core';

import { CounterService } from './counter.service';

@Component({
  selector: 'app-ng-counter',
  template: `
    <div id="app-ng-counterActions">
      <h2>This is Angular component: Zaquiel</h2>
      <img width="100" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
      <button (click)="minusCounter()">MINUS</button>
      <button (click)="plusCounter()">PLUS</button>
    </div>

  `
})
export class NgCounterActionsComponent implements OnInit {
  constructor(private counterService: CounterService) { }

  ngOnInit() {}

  plusCounter() {
    this.counterService.plusCounter();
  }

  minusCounter() {
    this.counterService.minusCounter();
  }

}
