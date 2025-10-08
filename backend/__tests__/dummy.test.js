// backend/__tests__/dummy.test.js
const { add, multiply } = require('../utils/calc');

describe('Dummy backend tests', () => {
  test('add should return correct sum', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('multiply should return correct product', () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
