import { initialState, gameReducer, GameStateType } from '../reducer';
import * as actions from '../actions';

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(gameReducer(undefined, {} as actions.GameActionTypes)).toEqual(
      initialState,
    );
  });

  it('should return the modified state [setGameStart]', () => {
    const modifiedState: GameStateType = {
      ...initialState,
      isGameRunning: true,
    };

    expect(gameReducer(initialState, actions.setGameStart())).toEqual(
      modifiedState,
    );
  });

  it('should return the modified state [setGameStop]', () => {
    const modifiedState: GameStateType = {
      ...initialState,
      isGameRunning: false,
    };

    expect(gameReducer(initialState, actions.setGameStop())).toEqual(
      modifiedState,
    );
  });

  it('should return the modified state [setGameClear]', () => {
    expect(gameReducer(initialState, actions.setGameClear())).toEqual(
      initialState,
    );
  });

  it('should return the modified state [setIncreaseGeneration]', () => {
    const modifiedState: GameStateType = {
      ...initialState,
      generation: 1,
    };

    expect(gameReducer(initialState, actions.setIncreaseGeneration())).toEqual(
      modifiedState,
    );
  });
});
