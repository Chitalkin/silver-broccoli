import { Reducer } from 'redux';
import { SET_USER_IS_LOGGED, SET_USER_NAME, UserActionTypes } from './actions';

export type UserStateType = {
  name: string;
  isLogged: boolean;
};

export const initialState: UserStateType = {
  name: '',
  isLogged: false,
};

export const userReducer: Reducer<UserStateType, UserActionTypes> = (
  state = initialState,
  action,
): UserStateType => {
  switch (action.type) {
    case SET_USER_IS_LOGGED:
      return {
        ...state,
        isLogged: action.payload,
      };

    case SET_USER_NAME:
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};
