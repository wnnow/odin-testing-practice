import { reverseString } from './reverseString.js';

it('reverse string take "string" return "gnirts"', () => {
  expect(reverseString('string')).toMatch(/gnirts/);
});
