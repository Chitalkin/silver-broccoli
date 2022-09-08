module.exports = {
  rootDir: '..',
  testEnvironment: 'jsdom',
  coverageDirectory: '<rootDir>__coverage__/',
  roots: ['<rootDir>/src/', '<rootDir>/tests/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/fileMock.js',
    '\\.(css|scss|less)$': '<rootDir>/tests/__mocks__/styleMock.js',
    '@/(.*)': '<rootDir>/src/$1',
  },
  coveragePathIgnorePatterns: ['index.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transformIgnorePatterns: ['/node_modules/'],
  testRegex: '/__tests__/.*\\.(ts|tsx)$',
  moduleDirectories: ['node_modules'],
  setupFilesAfterEnv: ['./configs/jest-setup.ts'],
};
