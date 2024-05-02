import { add, subtract, divide, multiply } from './calculator';

//add test cases
it('add 1 + 4 equal to 5', () => {
  expect(add(1, 4)).toBe(5);
});

it('add positive and negative numbers', () => {
  expect(add(5, -3)).toBe(2);
});

it('add two decimal numbers', () => {
  expect(add(1.5, 2.3)).toBeCloseTo(3.8);
});

it('add zero to a number', () => {
  expect(add(7, 0)).toBe(7);
});

it('add two large numbers', () => {
  expect(add(1000000000, 2000000000)).toBe(3000000000);
});

//subtract test cases
it('subtract 10 - 3 equal to 7', () => {
  expect(subtract(10, 3)).toBe(7);
});

it('subtract positive and negative numbers', () => {
  expect(subtract(10, -3)).toBe(13);
});

it('subtract zero from a number', () => {
  expect(subtract(7, 0)).toBe(7);
});

it('subtract larger number from smaller number', () => {
  expect(subtract(3, 6)).toBe(-3);
});

//divide test cases
it('divide 15 / 5 equal to 3', () => {
  expect(divide(15, 5)).toBe(3);
});

it('divide two negative numbers', () => {
  expect(divide(-15, -5)).toBe(3);
});

it('divide zero by a number', () => {
  expect(divide(0, 5)).toBe(0);
});

it('divide by zero', () => {
  expect(divide(10, 0)).toBe(Infinity);
});

//multiply test cases
it('multiply 3 * 6 equal to 18', () => {
  expect(multiply(3, 6)).toBe(18);
});

it('multiply two negative numbers', () => {
  expect(multiply(-3, -6)).toBe(18);
});

it('multiply zero by a number', () => {
  expect(multiply(0, 5)).toBe(0);
});

it('multiply by zero', () => {
  expect(multiply(10, 0)).toBe(0);
});
