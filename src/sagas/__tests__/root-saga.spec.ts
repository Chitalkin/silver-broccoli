import { runSaga } from 'redux-saga';
import { mockState } from '@/tests/mocks';
import * as sagas from '../root-saga';
import { RootState } from '@/store';

describe('Sagas', () => {
  describe('helloSaga', () => {
    const mockGetState = () => mockState;
    const spyAlert = jest.spyOn(window, 'alert').mockImplementation(jest.fn());

    afterAll(() => {
      spyAlert.mockRestore();
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should call alert if name exists', async () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await runSaga({ getState: mockGetState }, sagas.helloSaga);
      expect(spyAlert).toHaveBeenCalled();
    });

    it('should not call alert if name does not exist', async () => {
      const mockState = { user: { name: '' } } as RootState;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await runSaga({ getState: () => mockState }, sagas.helloSaga);
      expect(spyAlert).not.toHaveBeenCalled();
    });
  });
});
