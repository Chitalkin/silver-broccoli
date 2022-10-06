import { state } from '@/tests/mocks';
import { getUserName, getIsUserLogged } from '../user-selectors';

describe('User selectors', () => {
  it('should return the correct user name', () => {
    expect(getUserName(state)).toEqual('Ivan');
  });

  it('should return the correct user status', () => {
    expect(getIsUserLogged(state)).toEqual(false);
  });
});
