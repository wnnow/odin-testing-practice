function analyzeArray(arr) {
  const obj = {};
  const sum = arr.reduce((prev, cur) => prev + cur, 0);
  obj.average = sum / arr.length;
  obj.min = Math.min(...arr);
  obj.max = Math.max(...arr);
  obj.length = arr.length;
  return obj;
}

export { analyzeArray };
