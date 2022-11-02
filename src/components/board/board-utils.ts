import { BoardSizeConfigItem } from '@/configs';

export type CellStatus = 1 | 0;

/**
 * Возвращает данные данные для отрисови доски (двумерный массив)
 */
export const makeEmptyBoard = (cols: number, rows: number): CellStatus[][] => {
  const board = new Array(cols);

  for (let i = 0; i < cols; i++) {
    board[i] = new Array(rows).fill(0);
  }

  return board;
};

/**
 * Возващает кортеж с рандомными числами
 */
export const getRandomTuple = (
  columns: number,
  rows: number,
): [number, number] => [
  Math.floor(Math.random() * columns),
  Math.floor(Math.random() * rows),
];

/**
 * Возвращает доску с заполненными в случайном порядке "живыми" клетками
 *
 * 0 - "мертвая"
 * 1 - "живая"
 */
export const fillBoardRandomly = (
  columns: number,
  rows: number,
  percentage: number,
): CellStatus[][] => {
  const board = makeEmptyBoard(columns, rows);
  const cellsToFill = (columns * rows * percentage) / 100;

  for (let i = 0; i < cellsToFill; i++) {
    const [x, y] = getRandomTuple(columns, rows);
    board[x][y] = 1;
  }

  return board;
};

export const countNeighbours = (
  board: number[][],
  x: number,
  y: number,
): number => {
  let sum = 0;

  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      // если оказываемся на краю, переходим на другую сторону
      const col = (x + i + board.length) % board.length;
      const row = (y + j + board[0].length) % board[0].length;

      sum += board[col][row];
    }
  }
  // убираем себя из соседей
  sum -= board[x][y];

  return sum;
};

export const getNextGeneration = (prev: CellStatus[][]): CellStatus[][] => {
  const columns = prev.length;
  const rows = prev[0].length;

  const next = makeEmptyBoard(columns, rows);

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      // Подсчет соседей
      const neighbours = countNeighbours(prev, i, j);
      // Текущее состояние клетки
      const state = prev[i][j];
      // Если клетка мертва и у нее 3 живых соседа, то она становится живой, иначе остается мертвой.
      if (state === 0 && neighbours === 3) {
        next[i][j] = 1;
        // Если клетка жива и у нее 2−3 живых соседа, то она остается живой, иначе умирает.
      } else if (state === 1 && (neighbours < 2 || neighbours > 3)) {
        next[i][j] = 0;
      } else {
        next[i][j] = prev[i][j];
      }
    }
  }

  return next;
};
