import React from 'react';
import './counter.css';

interface CounterProps {
  count: number;
}

export const Counter: React.FC<CounterProps> = ({ count }) => (
  <b className="counter" aria-label="current-element-count">
    {count}
  </b>
);
