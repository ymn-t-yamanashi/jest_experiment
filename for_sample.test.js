const ForSample = require('./for_sample.js');

test('for test', () => {
  expect(ForSample.for()).toBe("0123");
});