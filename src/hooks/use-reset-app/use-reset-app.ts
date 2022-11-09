import { ERandomPercentage } from '@/configs';
import {
  resetGeneration,
  setGameStop,
  setRandomFillPercentage,
} from '@/reducers';
import { useDispatch } from '@/store';
import { useCallback } from 'react';

export const useResetApp = () => {
  const dispatch = useDispatch();

  return useCallback(() => {
    dispatch(setGameStop());
    dispatch(setRandomFillPercentage(ERandomPercentage.None));
    dispatch(resetGeneration());
  }, [dispatch]);
};
