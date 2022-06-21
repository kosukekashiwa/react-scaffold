module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/views/setupJestTests.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
};
