import * as actions from '../actions';

describe('user actions', () => {
  it('should return expected value [setUserName]', () => {
    const expected = {
      type: actions.SET_USER_NAME,
      payload: 'Ivan',
    };

    expect(actions.setUserName('Ivan')).toEqual(expected);
  });
});
