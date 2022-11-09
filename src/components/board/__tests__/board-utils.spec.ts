import {
  countNeighbours,
  getRandomTuple,
  generateEmptyBoard,
  checkIsEveryoneDead,
} from '../board-utils';

describe('Board utils', () => {
  describe('generateEmptyBoard', () => {
    const columns = 8;
    const rows = 8;

    it('should return an array with the expected length of the columns', () => {
      expect(generateEmptyBoard(columns, rows)).toHaveLength(columns);
    });

    it('should contain an array with the expected length of the rows', () => {
      expect(generateEmptyBoard(columns, rows)[0]).toHaveLength(rows);
    });
  });

  describe('getRandomTuple', () => {
    it('should return a tuple with random numbers', () => {
      expect(getRandomTuple(4, 4)).toEqual([
        expect.any(Number),
        expect.any(Number),
      ]);
    });
  });

  describe('countNeighbours', () => {
    it.each([
      [
        [
          [0, 0, 0],
          [0, 1, 0],
          [0, 0, 0],
        ],
        0,
      ],
      [
        [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        0,
      ],
      [
        [
          [1, 1, 1],
          [1, 1, 0],
          [0, 0, 0],
        ],
        4,
      ],
      [
        [
          [1, 1, 1],
          [1, 0, 0],
          [0, 0, 0],
        ],
        4,
      ],
      [
        [
          [0, 1, 1],
          [0, 1, 0],
          [0, 0, 0],
        ],
        2,
      ],
      [
        [
          [0, 1, 1],
          [0, 1, 1],
          [0, 0, 0],
        ],
        3,
      ],
    ])('with %o, neighbours = %s', (board, expected) => {
      // считаем соседей вокруг центральной точки
      expect(countNeighbours(board, 1, 1)).toEqual(expected);
    });
  });

  describe('checkIsEveryoneDead', () => {
    it('should return true if all cells are dead', () => {
      expect(
        checkIsEveryoneDead([
          [0, 0],
          [0, 0],
        ]),
      ).toBe(true);
    });

    it('should return false if some cell is alive', () => {
      expect(
        checkIsEveryoneDead([
          [0, 1],
          [0, 0],
        ]),
      ).toBe(false);
    });
  });
});
