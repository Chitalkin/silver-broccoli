import { renderHook } from '@testing-library/react';
import {
  BoardSizeConfigItem,
  BoardSizeConfigType,
  BOARD_SIZE_CONFIGS,
  EBoardSize,
  ESettingsConfigItem,
  SettingsConfig,
} from '@/configs';
import * as hooks from '@/store/hooks';
import { useConfig } from '../hooks/useConfig';
import { setBoardSize } from '@/reducers';

describe('Config hooks', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should return the expected config settings', () => {
    const mockBoardSize = BOARD_SIZE_CONFIGS[EBoardSize.Small];

    jest.spyOn(hooks, 'useSelector').mockReturnValue(mockBoardSize);
    jest.spyOn(hooks, 'useDispatch').mockReturnValue(jest.fn());

    const { result } = renderHook(() =>
      useConfig(ESettingsConfigItem.BoardSizeConfig, setBoardSize),
    );

    const returnedSettings = result.current as unknown as [
      BoardSizeConfigItem,
      BoardSizeConfigType,
      (value: EBoardSize) => void,
    ];

    expect(returnedSettings).toEqual(
      expect.arrayContaining([
        mockBoardSize,
        SettingsConfig.boardSizeConfig,
        expect.any(Function),
      ]),
    );
  });

  it('should call dispatch with expected action #current', () => {
    const mockBoardSize = BOARD_SIZE_CONFIGS[EBoardSize.Small];
    const mockDispatch = jest.fn();

    jest.spyOn(hooks, 'useSelector').mockReturnValue(mockBoardSize);
    jest.spyOn(hooks, 'useDispatch').mockReturnValue(mockDispatch);

    const { result } = renderHook(() =>
      useConfig(ESettingsConfigItem.BoardSizeConfig, setBoardSize),
    );

    const returnedSettings = result.current as unknown as [
      BoardSizeConfigItem,
      BoardSizeConfigType,
      (value: EBoardSize) => void,
    ];

    const onChange = returnedSettings[2];
    onChange(EBoardSize.Medium);

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(setBoardSize(EBoardSize.Medium));
  });
});
