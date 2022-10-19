import { mockState } from '@/tests/mocks';
import { getUserName } from '../user-selectors';

describe('User selectors', () => {
  it('should return the correct user name', () => {
    expect(getUserName(mockState)).toEqual('Ivan');
  });
});
