import { configReducer, ConfigStateType, initialState } from '../reducer';
import * as actions from '../actions';
import {
  BOARD_SIZE_CONFIGS,
  EBoardSize,
  ERandomPercentage,
  ESimSpeed,
  RANDOM_FILL_PERCENTAGE,
  SIM_SPEED_MS,
} from '@/configs';
import { EFetchStatus } from '@/enums';

describe('config reducer', () => {
  it('should return the initial state', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(configReducer(undefined, {})).toEqual(initialState);
  });

  it('should return the modified state [setBoardSize]', () => {
    const modifiedState: ConfigStateType = {
      ...initialState,
      boardSizeConfig: BOARD_SIZE_CONFIGS.medium,
    };

    expect(
      configReducer(initialState, actions.setBoardSize(EBoardSize.Medium)),
    ).toEqual(modifiedState);
  });

  it('should return the modified state [setRandomFillPercentage]', () => {
    const modifiedState: ConfigStateType = {
      ...initialState,
      randomFillPersentageConfig: RANDOM_FILL_PERCENTAGE.small,
    };

    expect(
      configReducer(
        initialState,
        actions.setRandomFillPercentage(ERandomPercentage.Small),
      ),
    ).toEqual(modifiedState);
  });

  it('should return the modified state [setSimSpeed]', () => {
    const modifiedState: ConfigStateType = {
      ...initialState,
      simSpeedConfig: SIM_SPEED_MS.fast,
    };

    expect(
      configReducer(initialState, actions.setSimSpeed(ESimSpeed.Fast)),
    ).toEqual(modifiedState);
  });

  it('should return the modified state [setConfigLoading]', () => {
    const modifiedState: ConfigStateType = {
      ...initialState,
      loading: EFetchStatus.Progress,
    };

    expect(configReducer(initialState, actions.setConfigLoading())).toEqual(
      modifiedState,
    );
  });

  it('should return the modified state [setConfigLoaded]', () => {
    const modifiedState: ConfigStateType = {
      ...initialState,
      loading: EFetchStatus.Success,
    };

    expect(configReducer(initialState, actions.setConfigLoaded())).toEqual(
      modifiedState,
    );
  });

  it('should return the modified state [setConfigError]', () => {
    const modifiedState: ConfigStateType = {
      ...initialState,
      loading: EFetchStatus.Error,
      error: 'error',
    };

    expect(
      configReducer(initialState, actions.setConfigError('error')),
    ).toEqual(modifiedState);
  });
});
