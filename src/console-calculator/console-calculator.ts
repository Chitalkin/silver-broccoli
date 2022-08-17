import { logger } from './utils';

export const calculator = (expression: string): number =>
  Function(`return (${expression.replaceAll(' ', '')})`)();

export const consoleCalculator = (expression: string): void =>
  logger(calculator(expression));
