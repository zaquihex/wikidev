import {Injector} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactCounter from './react-counter';
import {BehaviorSubject} from 'rxjs';
import RadioQuestion from './RadioQuestion';

interface IReactApp {
  injector: Injector;
  counter$: BehaviorSubject<number>;
}

class ReactApp extends React.Component<IReactApp, any> {
  constructor(props) {
    super(props);

    this.state = {
      counter$: this.props.counter$
    };
  }

  render() {
    return (
      <div className={'renderer'}>
        <RadioQuestion />
      </div>
    );
  }
}

export class ReactApplication {

  static initialize(
    containerId: string,
    injector: Injector,
    counter$: BehaviorSubject<number>
  ) {
    ReactDOM.render(
      <ReactApp injector={injector} counter$={counter$}/>,
      document.getElementById(containerId)
    );
  }
}
