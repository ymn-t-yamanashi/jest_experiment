const MapSample = require('./map_sample.js')

test('map test', () => {
  expect(MapSample.map()).toEqual([2, 4, 6, 8, 10])
});
