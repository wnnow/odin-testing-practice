import { caesarCipher, caesarDeCipher } from './caesarCipher';

it('Encrypt shift factor 1 enter "abc" expect "BCD"', () => {
  expect(caesarCipher('abc', 1)).toMatch(/BCD/);
});

it('Encrypt work with space shift factor 1 enter "ab c" expect "BC D"', () => {
  expect(caesarCipher('ab c', 1)).toMatch(/BC D/);
});

it('Encrypt work with space and shift factor exceed 26  enter "ab c" expect "BC D"', () => {
  expect(caesarCipher('ab c', 27)).toMatch(/BC D/);
});

it('Encrypt work with space shift factor 1 enter "hello zehsco" expect "IFMMP AFITDP"', () => {
  expect(caesarCipher('hello zehsco', 1)).toMatch(/IFMMP AFITDP/);
});

it('Encrypt wrapping from z to a with shift factor 3', () => {
  expect(caesarCipher('xyz', 86)).toBe('FGH');
});

it('Encrypt preserving punctuation with shift factor 5', () => {
  expect(caesarCipher('hello, world!', 5)).toBe('MJQQT, BTWQI!');
});

it('Decipher factor 1 enter "BCD" expect "abc"', () => {
  expect(caesarDeCipher('BCD', 1)).toMatch(/abc/);
});

it('Decrypt work with space shift factor 1 enter "ab c" expect "BC D"', () => {
  expect(caesarDeCipher('BC D', 1)).toMatch(/ab c/);
});

it('Decrypt work with space and shift factor exceed 26 enter "BC D" expect "ab c"', () => {
  expect(caesarDeCipher('BC D', 27)).toMatch(/ab c/);
});

it('Decrypt work with space shift factor 23 enter "IFMMP AFITDP" expect "lipps dilwgs"', () => {
  expect(caesarDeCipher('IFMMP AFITDP', 23)).toMatch(/lipps dilwgs/);
});
