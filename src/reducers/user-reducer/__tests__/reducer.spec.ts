import { initialState, userReducer, UserStateType } from '../reducer';
import * as actions from '../actions';

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {} as actions.UserActionTypes)).toEqual(
      initialState,
    );
  });

  it('should return the modified state [setBoardSize]', () => {
    const modifiedState: UserStateType = {
      ...initialState,
      isLogged: false,
    };

    expect(userReducer(initialState, actions.setUserIsLogged(false))).toEqual(
      modifiedState,
    );
  });

  it('should return the modified state [setRandomFillPercentage]', () => {
    const modifiedState: UserStateType = {
      ...initialState,
      name: 'Ivan',
    };

    expect(userReducer(initialState, actions.setUserName('Ivan'))).toEqual(
      modifiedState,
    );
  });
});
