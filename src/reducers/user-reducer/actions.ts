export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_IS_LOGGED = 'SET_USER_IS_LOGGED';

export const setUserName = (name: string) =>
  ({
    type: SET_USER_NAME,
    payload: name,
  } as const);

export type UserActionTypes = ReturnType<typeof setUserName>;
