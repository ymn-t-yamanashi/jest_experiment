const WhileSample = require('./while_sample.js');

test('for test', () => {
  expect(WhileSample.while()).toBe("01234");
});