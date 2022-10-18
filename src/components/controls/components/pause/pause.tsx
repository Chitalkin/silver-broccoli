import React from 'react';
import { ButtonWithTimer } from '@/ui/button';
import { useDispatch } from '@/store';
import { setGameStop } from '@/reducers';

export const ControlPause = React.memo(() => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(setGameStop());

  return (
    <ButtonWithTimer onClick={handleClick} resetAfter={1000}>
      Pause
    </ButtonWithTimer>
  );
});
