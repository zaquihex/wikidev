import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter$: BehaviorSubject<number> =  new BehaviorSubject(0);

  constructor() {}

  getCounter$(): BehaviorSubject<number> {
    return this.counter$;
  }
}
