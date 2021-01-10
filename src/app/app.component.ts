import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {CounterService} from './angular/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public counter: number;
  public counterNum$: BehaviorSubject<number>;

  constructor( private counterService: CounterService) {}

  ngOnInit(): void {
    this.counterService.getCounter$().subscribe((res: number) => {
      this.counter = res;
    });

    this.counterNum$ = this.counterService.getCounter$();
  }
}
