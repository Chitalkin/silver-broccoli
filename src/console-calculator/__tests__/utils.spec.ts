import { logger } from '../utils';

describe('[utils]', () => {
  describe('logger', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    beforeEach(() => {
      consoleSpy.mockClear();
    });

    it('Should log an expected value', () => {
      logger(22);

      expect(consoleSpy).toHaveBeenCalledTimes(1);
      expect(consoleSpy).toHaveBeenCalledWith('> 22');
    });
  });
});
