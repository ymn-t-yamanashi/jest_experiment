const stringSample = require('./string.js')

test('split1', () => {
  expect(stringSample.split1()).toEqual("11")
})

test('split2', () => {
  expect(stringSample.split2()).toEqual(",")
})

test('split3', () => {
  expect(stringSample.split3()).toEqual("00,11,22,33")
})