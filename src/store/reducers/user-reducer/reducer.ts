import { Reducer } from 'redux';
import { SET_USER_NAME, UserActionTypes } from './actions';

export type UserStateType = {
  name: string;
};

export const initialState: UserStateType = {
  name: '',
};

export const userReducer: Reducer<UserStateType, UserActionTypes> = (
  state = initialState,
  action,
): UserStateType => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};
