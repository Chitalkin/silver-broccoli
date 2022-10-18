import React from 'react';
import { ButtonWithTimer } from '@/ui/button';
import { useDispatch } from '@/store';
import { setGameStart } from '@/reducers';

export const ControlRun = React.memo(() => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(setGameStart());

  return (
    <ButtonWithTimer onClick={handleClick} resetAfter={1000}>
      Run
    </ButtonWithTimer>
  );
});
