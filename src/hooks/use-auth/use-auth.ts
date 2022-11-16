import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserName, setUserName, useDispatch, useSelector } from '@/store';

type Logout = () => void;

export const useAuth = (): Readonly<[string, Logout]> => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(getUserName);

  useEffect(() => {
    if (name) {
      navigate('/game');
    } else {
      navigate('/');
    }
  }, [dispatch, name, navigate]);

  const logout = useCallback(() => {
    dispatch(setUserName(''));
    navigate('/');
  }, [dispatch, navigate]);

  return [name, logout] as const;
};
