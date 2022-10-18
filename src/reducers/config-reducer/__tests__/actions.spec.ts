import { EBoardSize, ERandomPercentage, ESimSpeed } from '@/configs';
import * as actions from '../actions';

describe('config actions', () => {
  it('should return expected value [setBoardSize]', () => {
    const expected = {
      type: actions.SET_BOARD_SIZE,
      payload: EBoardSize.Small,
    };

    expect(actions.setBoardSize(EBoardSize.Small)).toEqual(expected);
  });

  it('should return expected value [setRandomFillPercentage]', () => {
    const expected = {
      type: actions.SET_RANDOM_FILL_PERCENTAGE,
      payload: ERandomPercentage.None,
    };

    expect(actions.setRandomFillPercentage(ERandomPercentage.None)).toEqual(
      expected,
    );
  });

  it('should return expected value [setSimSpeed]', () => {
    const expected = {
      type: actions.SET_SIM_SPEED,
      payload: ESimSpeed.Slow,
    };

    expect(actions.setSimSpeed(ESimSpeed.Slow)).toEqual(expected);
  });

  // it('should call dispatch with correct actions [setLoadedConfig]', () => {
  //   jest.useFakeTimers();

  //   const mockDispatch = jest.fn();
  //   const mockGetState = jest.fn();

  //   actions.setLoadedConfig()(mockDispatch, mockGetState, {});

  //   expect(mockDispatch).toHaveBeenCalledTimes(1);
  //   expect(mockDispatch).toHaveBeenCalledWith(actions.setConfigLoading());

  //   mockDispatch.mockClear();
  //   jest.runOnlyPendingTimers();

  //   expect(mockDispatch).toHaveBeenCalledWith(actions.setConfigLoaded());
  //   expect(mockDispatch).toHaveBeenCalledTimes(1);

  //   jest.useRealTimers();
  // });
});
