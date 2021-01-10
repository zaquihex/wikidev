import {Component, Injector, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ReactApplication} from '../react/react-application';

@Component({
  selector: 'app-react-owc-renderer',
  template: `<div class="react-container" id="react-owc-renderer"></div>`
})
export class ReactCounterComponent implements OnInit {
  @Input() counter$: BehaviorSubject<number>;

  constructor(public injector: Injector) { }

  ngOnInit() {
    ReactApplication.initialize('react-owc-renderer', this.injector, this.counter$);
  }
}
