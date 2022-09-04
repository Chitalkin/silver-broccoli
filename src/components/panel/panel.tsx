import React from 'react';
import { Button } from '../button';
import { Counter } from '../counter';
import './panel.css';

interface PanelState {
  timerId: number | null;
  seconds: number;
  json?: Record<string, string | number | boolean>;
}

export class Panel extends React.Component<{}, PanelState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      timerId: null,
      seconds: 0,
    };
  }

  doNothing = () => {
    // ///
  };

  getFiles = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => this.setState({ json }));
  };

  componentDidMount() {
    window.addEventListener('click', this.doNothing);
    this.getFiles();
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.doNothing);
    this.clearTimer();
  }

  componentDidUpdate() {
    if (this.state.seconds === 5) {
      this.getFiles();
    }
  }

  shouldComponentUpdate(_: {}, nextState: PanelState) {
    if (nextState.seconds > 100000) {
      return false;
    }

    return true;
  }

  runTimer = () => {
    if (!this.state.timerId) {
      const timerId = window.setInterval(() => {
        this.setState(({ seconds }) => ({
          seconds: seconds + 1,
        }));
      }, 1000);

      this.setState({ timerId });
    }
  };

  stopTimer = () => {
    if (typeof this.state.timerId === 'number') {
      window.clearInterval(this.state.timerId);
      this.setState({ timerId: null });
    }
  };

  clearTimer = () => {
    this.setState({ seconds: 0 });
    this.stopTimer();
  };

  render(): React.ReactNode {
    return (
      <div className="panel">
        <Button resetAfter={1000} onClick={this.runTimer}>
          Run
        </Button>
        <Button resetAfter={1000} onClick={this.stopTimer}>
          Pause
        </Button>
        <Button resetAfter={1000} onClick={this.clearTimer}>
          Clear
        </Button>
        <Counter count={this.state.seconds} />
      </div>
    );
  }
}
