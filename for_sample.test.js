const ForSample = require('./for_sample.js')

test('for test', () => {
  expect(ForSample.for()).toBe("0123")
});

test('forBreak test', () => {
  expect(ForSample.forBreak()).toBe("012")
});

test('forContinue test', () => {
  expect(ForSample.forContinue()).toBe("13")
});