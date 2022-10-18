import React from 'react';
import { ButtonWithTimer } from '@/ui/button';
import { useDispatch } from '@/store';
import { setGameClear } from '@/reducers';

export const ControlClear = React.memo(() => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(setGameClear());

  return (
    <ButtonWithTimer onClick={handleClick} resetAfter={1000}>
      Clear
    </ButtonWithTimer>
  );
});
