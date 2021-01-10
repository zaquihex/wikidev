import * as React from 'react';
import {BehaviorSubject} from 'rxjs';

interface IReactCounter {
  counter$: BehaviorSubject<number>;
}

class ReactCounter extends React.Component<IReactCounter, any> {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

  }

  componentDidMount(): void {
    this.props.counter$.subscribe((res) => {
      this.setState({counter: res});
    });
  }

  render() {
    return (<span>counter: {this.state.counter}</span>);
  }
}

export default ReactCounter;
