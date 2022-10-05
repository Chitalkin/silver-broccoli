import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserName } from '@/selectors';
import { useDispatch, useSelector } from '@/store';
import { setUserName } from '@/reducers';

type Logout = () => void;

export const useAuth = (): Readonly<[string, Logout]> => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(getUserName);

  useEffect(() => {
    if (name) {
      navigate('/game');
    }
  }, [name, navigate]);

  const logout = useCallback(() => {
    dispatch(setUserName(''));
    navigate('/');
  }, [dispatch, navigate]);

  return [name, logout] as const;
};
