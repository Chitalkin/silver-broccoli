import React from 'react';
import { ButtonWithTimer } from '@/ui/button';
import { useDispatch } from '@/store';
import { clearBoard } from '@/reducers';

export const ControlClear = React.memo(() => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearBoard(true));
  };

  return (
    <ButtonWithTimer onClick={handleClick} resetAfter={1000}>
      Clear
    </ButtonWithTimer>
  );
});
