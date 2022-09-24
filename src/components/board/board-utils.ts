import { BoardSizeConfigItem } from '@/configs';

type RandomCellType = {
  isActive: boolean;
};

export const generateRandomCellsByPersentageAndSize = (
  size: BoardSizeConfigItem,
  percentage: number,
): RandomCellType[] => {
  const allCells = size.columns * size.rows;
  const activeCells = Math.round((allCells * percentage) / 100);

  const preparedCells = Array.from({ length: allCells }, () => ({
    isActive: false,
  }));

  for (let i = 0; i < activeCells; i++) {
    const randomIndex = Math.floor(Math.random() * allCells);

    preparedCells[randomIndex].isActive = true;
  }

  return preparedCells;
};
