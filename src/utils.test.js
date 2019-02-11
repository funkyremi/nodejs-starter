/* global test expect */
import { sum, divide } from './utils';

test('1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('10 / 2 to equal 5', () => {
  expect(divide(10, 2)).toBe(5);
});
