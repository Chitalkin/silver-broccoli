import { RootState } from '@/store';

/**
 * Возвращает имя пользователя
 */
export const getUserName = (state: RootState): string => state.user.name;
