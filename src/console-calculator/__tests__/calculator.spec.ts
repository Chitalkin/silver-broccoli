import { calculator, consoleCalculator } from '../console-calculator';
import * as utils from '../utils';

describe('calculator', () => {
  it.each([
    ['6 * 2', 12],
    ['6 / 2', 3],
    ['22 + 8', 30],
    ['-4 + 2', -2],
    ['-4 * 2 + 10', 2],
    ['4 - 2 * 5', -6],
    ['4 + 2 / 2', 5],
    ['4 + 2 * 10 / 2', 14],
  ])('with expression as %s, should return %s', (expression, expected) => {
    expect(calculator(expression)).toBe(expected);
  });
});

describe('consoleCalculator', () => {
  it('Should call with correct number', () => {
    const spy = jest.spyOn(utils, 'logger');

    consoleCalculator('2 + 2');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(4);

    spy.mockClear();
  });
});
