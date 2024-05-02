import { caesarCipher } from './caesarCipher';

it('shift factor 1 enter "abc" expect "BCD"', () => {
  expect(caesarCipher('abc', 1)).toMatch(/BCD/);
});

it('Work with space shift factor 1 enter "ab c" expect "BC D"', () => {
  expect(caesarCipher('ab c', 1)).toMatch(/BC D/);
});
