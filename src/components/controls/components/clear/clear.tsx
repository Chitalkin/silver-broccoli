import React from 'react';
import { ButtonWithTimer } from '@/ui/button';
import { useResetApp } from '@/hooks';

export const ControlClear = React.memo(() => {
  const resetApp = useResetApp();

  return (
    <ButtonWithTimer onClick={resetApp} resetAfter={1000}>
      Clear
    </ButtonWithTimer>
  );
});
