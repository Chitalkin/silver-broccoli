import * as actions from '../actions';

describe('user actions', () => {
  it('should return expected value [setUserIsLogged]', () => {
    const expected = {
      type: actions.SET_USER_IS_LOGGED,
      payload: false,
    };

    expect(actions.setUserIsLogged(false)).toEqual(expected);
  });

  it('should return expected value [setUserIsLogged]', () => {
    const expected = {
      type: actions.SET_USER_NAME,
      payload: 'Ivan',
    };

    expect(actions.setUserName('Ivan')).toEqual(expected);
  });
});
