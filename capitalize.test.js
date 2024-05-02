import { capitalize } from './capitalize';

it('return first character capitalize "string" should return "S"', () => {
  expect(capitalize('string')).toMatch(/S/);
});
