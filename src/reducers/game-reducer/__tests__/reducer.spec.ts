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
      intervalId: 1,
    };

    expect(gameReducer(initialState, actions.setGameStart(1))).toEqual(
      modifiedState,
    );
  });

  it('should return the modified state [setGameStop]', () => {
    const modifiedState: GameStateType = {
      ...initialState,
      isGameRunning: false,
      intervalId: null,
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

  it('should return the modified state [setPopulation]', () => {
    const mockPopulation = [[1]];
    const modifiedState: GameStateType = {
      ...initialState,
      population: mockPopulation,
    };

    expect(
      gameReducer(initialState, actions.setPopulation(mockPopulation)),
    ).toEqual(modifiedState);
  });

  it('should return the modified state [setGeneration]', () => {
    const mockGeneration = 1;
    const modifiedState: GameStateType = {
      ...initialState,
      generation: mockGeneration,
    };

    expect(
      gameReducer(initialState, actions.setGeneration(mockGeneration)),
    ).toEqual(modifiedState);
  });
});
