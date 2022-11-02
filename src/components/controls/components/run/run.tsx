import React from 'react';
import { ButtonWithTimer } from '@/ui/button';
import { useDispatch, useSelector } from '@/store';
import { setGameStart } from '@/reducers';
import { getIsGameRunning } from '@/selectors';

export const ControlRun = React.memo(() => {
  const dispatch = useDispatch();
  const isGameRunning = useSelector(getIsGameRunning);

  const handleClick = () => {
    if (!isGameRunning) {
      dispatch(setGameStart());
    }
  };

  return (
    <ButtonWithTimer onClick={handleClick} resetAfter={1000}>
      Run
    </ButtonWithTimer>
  );
});
