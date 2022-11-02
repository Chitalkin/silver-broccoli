import React, { useCallback } from 'react';
import { ButtonWithTimer } from '@/ui/button';
import { useDispatch } from '@/store';
import {
  clearBoard,
  resetGeneration,
  setGameStop,
  setRandomFillPercentage,
} from '@/reducers';
import { useSelector } from 'react-redux';
import { getIsBoardClear } from '@/selectors';
import { ERandomPercentage } from '@/configs';

export const ControlClear = React.memo(() => {
  const dispatch = useDispatch();
  const isBoardCleared = useSelector(getIsBoardClear);
  const handleClick = useCallback(() => {
    if (!isBoardCleared) {
      dispatch(setGameStop());
      dispatch(resetGeneration());
      dispatch(setRandomFillPercentage(ERandomPercentage.None));
      dispatch(clearBoard(true));
    }
  }, [dispatch, isBoardCleared]);

  return (
    <ButtonWithTimer onClick={handleClick} resetAfter={1000}>
      Clear
    </ButtonWithTimer>
  );
});
