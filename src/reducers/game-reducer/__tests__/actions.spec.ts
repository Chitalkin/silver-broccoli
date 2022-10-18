import * as actions from '../actions';

describe('game actions', () => {
  it('should return expected value [setGameClear]', () => {
    const expected = {
      type: actions.SET_GAME_CLEAR,
    };

    expect(actions.setGameClear()).toEqual(expected);
  });

  it('should return expected value [setGameStart]', () => {
    const expected = {
      type: actions.SET_GAME_START,
    };

    expect(actions.setGameStart()).toEqual(expected);
  });

  it('should return expected value [setGameStop]', () => {
    const expected = {
      type: actions.SET_GAME_STOP,
    };

    expect(actions.setGameStop()).toEqual(expected);
  });

  it('should return expected value [setGeneration]', () => {
    const mockGeneration = 1;
    const expected = {
      type: actions.SET_GENERATION,
      payload: mockGeneration,
    };

    expect(actions.setGeneration(mockGeneration)).toEqual(expected);
  });

  it('should return expected value [setPopulation]', () => {
    const mockPopulation = [[1]];
    const expected = {
      type: actions.SET_POPULATION,
      payload: mockPopulation,
    };

    expect(actions.setPopulation(mockPopulation)).toEqual(expected);
  });
});
