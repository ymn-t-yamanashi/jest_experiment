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

test('forEach test', () => {
  expect(ForSample.forEach()).toBe("abc")
});

test('forOf test', () => {
  expect(ForSample.forOf()).toBe("abc")
});

test('forIn test', () => {
  expect(ForSample.forIn()).toBe("abc")
});

test('forEach Object test', () => {
  expect(ForSample.forEachObject()).toBe("aあbいcう")
});

test('forIn Object test', () => {
  expect(ForSample.forInObject()).toBe("aあbいcう")
});