import { reverseString } from './reverse-string';

it('reverse string take "string" return "gnirts"', () => {
  expect(reverseString('string')).toMatch(/gnirts/);
});
