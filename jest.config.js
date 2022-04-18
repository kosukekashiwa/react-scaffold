module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/views/setupJestTests.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
};
