const analyzeArray = require('./analyzeArray');

describe('analyzeArray', () => {
    it('should return the correct object for a non-empty array', () => {
        const result = analyzeArray([1, 8, 3, 4, 2, 6]);
        expect(result).toEqual({
          average: 4,
          min: 1,
          max: 8,
          length: 6,
        });
      });

      it('should return the correct object for an empty array', () => {
        const result = analyzeArray([]);
        expect(result).toEqual({
          average: 0,
          min: undefined,
          max: undefined,
          length: 0,
        });
      });

      it('should throw an error for a non-array input', () => {
        expect(() => analyzeArray('not an array')).toThrowError('Input is not an array.');
      });
})