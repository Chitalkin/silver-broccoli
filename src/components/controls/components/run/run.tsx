import React, { useCallback } from 'react';
import { ButtonWithTimer } from '@/ui/button';
import {
  getIsGameRunning,
  setGameStart,
  useDispatch,
  useSelector,
} from '@/store';

export const ControlRun = React.memo(() => {
  const dispatch = useDispatch();
  const isGameRunning = useSelector(getIsGameRunning);

  const handleClick = useCallback(() => {
    if (!isGameRunning) {
      dispatch(setGameStart());
    }
  }, [dispatch, isGameRunning]);

  return (
    <ButtonWithTimer onClick={handleClick} resetAfter={1000}>
      Run
    </ButtonWithTimer>
  );
});
