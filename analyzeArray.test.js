import { analyzeArray } from './analyzeArray';

it('enter [1,2,3,4,5,6,7,8,9] return obj == {average:5, min:1, max:9, length:9}', () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual({
    average: 5,
    min: 1,
    max: 9,
    length: 9,
  });
});

it('enter [89,23,45,98] return obj == {average: 63.75, min: 23 max: 98, length: 4}', () => {
  expect(analyzeArray([89, 23, 45, 98])).toEqual({
    average: 63.75,
    min: 23,
    max: 98,
    length: 4,
  });
});
