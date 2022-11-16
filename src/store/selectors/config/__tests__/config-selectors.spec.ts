import { mockState } from '@/tests/mocks';
import {
  getPersentageConfig,
  getSizeConfig,
  getSpeedConfig,
} from '../config-selectors';

describe('Config selectors', () => {
  describe('getSizeConfig', () => {
    it('should return the correct board size', () => {
      expect(getSizeConfig(mockState)).toEqual(
        mockState.config.boardSizeConfig,
      );
    });
  });

  describe('getFillPersentageConfig', () => {
    it('should return the correct random percentage', () => {
      expect(getPersentageConfig(mockState)).toEqual(
        mockState.config.randomFillPersentageConfig,
      );
    });
  });

  describe('getSpeedConfig', () => {
    it('should return the expected game speed', () => {
      expect(getSpeedConfig(mockState)).toEqual(
        mockState.config.simSpeedConfig,
      );
    });
  });
});
