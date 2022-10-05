import { RootState } from '@/store';

/**
 * Возвращает имя пользователя
 */
export const getUserName = (state: RootState): string => state.user.name;

/**
 * Возвращает true, если пользователь залогинен
 */
export const getIsUserLogged = (state: RootState): boolean =>
  state.user.isLogged;
