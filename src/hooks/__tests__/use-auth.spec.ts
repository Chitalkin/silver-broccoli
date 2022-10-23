const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

import { renderHook } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../use-auth';
import { hookWrapper } from '@/tests/utils';
import { RootState } from '@/store';

describe('Common hooks', () => {
  describe('useAuth', () => {
    afterAll(() => {
      jest.restoreAllMocks();
    });

    beforeAll(() => {
      mockedUsedNavigate.mockClear();
    });

    it('should call navigate with `/game` if name is exists', () => {
      renderHook(() => useAuth(), {
        wrapper: hookWrapper(),
      });
      const mockNavigate = useNavigate();

      expect(mockNavigate).toHaveBeenCalledWith('/game');
    });

    it('should call navigate with `/` args if name is undefined', () => {
      renderHook(() => useAuth(), {
        wrapper: hookWrapper({ user: {} } as RootState),
      });
      const mockNavigate = useNavigate();

      expect(mockNavigate).toHaveBeenCalledWith('/');
    });

    it('should return expected result', () => {
      const { result } = renderHook(() => useAuth(), {
        wrapper: hookWrapper(),
      });
      const [name, logout] = result.current;

      expect(name).toBe('Ivan');
      expect(logout).toBeInstanceOf(Function);
    });
  });
});
