import React from 'react';
import { Button } from '../button';
import { Counter } from '../counter';
import './panel.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PanelProps {}

interface PanelState {
  timerId: number | null;
  seconds: number;
  json?: Record<string, string | number | boolean>;
}

export class Panel extends React.Component<PanelProps, PanelState> {
  constructor(props: PanelProps) {
    super(props);

    this.state = {
      timerId: null,
      seconds: 0,
    };

    this.runTimer = this.runTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  shouldComponentUpdate(_: PanelProps, nextState: PanelState) {
    if (nextState.seconds > 100000) {
      return false;
    }

    return true;
  }

  runTimer() {
    if (!this.state.timerId) {
      const timerId = window.setInterval(() => {
        this.setState(({ seconds }) => ({
          seconds: seconds + 1,
        }));
      }, 1000);

      this.setState({ timerId });
    }
  }

  stopTimer() {
    if (typeof this.state.timerId === 'number') {
      window.clearInterval(this.state.timerId);
      this.setState({ timerId: null });
    }
  }

  clearTimer() {
    this.setState({ seconds: 0 });
    this.stopTimer();
  }

  render(): React.ReactNode {
    return (
      <div className="panel">
        <Button onClick={this.runTimer}>Run</Button>
        <Button onClick={this.stopTimer}>Pause</Button>
        <Button onClick={this.clearTimer}>Clear</Button>
        <Counter count={this.state.seconds} />
      </div>
    );
  }
}
