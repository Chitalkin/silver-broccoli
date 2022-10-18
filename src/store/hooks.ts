import {
  useSelector as useReduxSelector,
  useDispatch as useAppDispatch,
  TypedUseSelectorHook,
} from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useDispatch: () => AppDispatch = useAppDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
