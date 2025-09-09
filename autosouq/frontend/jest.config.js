module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest'
  },
  testRegex: '.*\\.test\\.(t|j)sx?$'
};
