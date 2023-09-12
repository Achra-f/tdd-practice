function analyzeArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input is not an array.");
  }

  if (arr.length === 0) {
    return {
      average: 0,
      min: undefined,
      max: undefined,
      length: 0,
    };
  }

  const sum = arr.reduce((acc, val) => acc + val, 0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average,
    min,
    max,
    length: arr.length,
  };
}

module.exports = analyzeArray;