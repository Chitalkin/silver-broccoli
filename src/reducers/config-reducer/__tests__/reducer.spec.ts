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
});
