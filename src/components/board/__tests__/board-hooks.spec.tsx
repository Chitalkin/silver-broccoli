import React from 'react';
import { renderHook } from '@testing-library/react';
import * as utils from '../board-utils';
import { useFilledBoardByPersentage } from '../board-hooks';
import { hookWrapper } from '@/tests/utils';

describe('Board hooks', () => {
  describe('useFilledBoardByPersentage', () => {
    const spyFillBoardRandomly = jest.spyOn(utils, 'fillBoardRandomly');

    it('should call fillBoardRandomly once if config does not change', () => {
      const { rerender } = renderHook(() => useFilledBoardByPersentage(), {
        wrapper: hookWrapper(),
      });

      rerender();
      expect(spyFillBoardRandomly).toHaveBeenCalledTimes(1);
    });
  });
});
