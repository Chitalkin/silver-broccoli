import React from 'react';
import { ButtonWithTimer } from '@/ui/button';
import { useDispatch, useSelector } from '@/store';
import { setGameStop } from '@/reducers';
import { getIsGameRunning } from '@/selectors';

export const ControlPause = React.memo(() => {
  const dispatch = useDispatch();
  const isGameRunning = useSelector(getIsGameRunning);

  const handleClick = () => {
    if (isGameRunning) {
      dispatch(setGameStop());
    }
  };

  return (
    <ButtonWithTimer onClick={handleClick} resetAfter={1000}>
      Pause
    </ButtonWithTimer>
  );
});
