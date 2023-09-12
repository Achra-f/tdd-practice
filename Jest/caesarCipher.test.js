const caesarCipher = require('./caesarCipher');

describe('caesarCipher', () => {
  it('should shift letters by the specified factor (positive shift)', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });

  it('should shift letters by the specified factor (negative shift)', () => {
    expect(caesarCipher('Khoor, Zruog!', -3)).toBe('Hello, World!');
  });

  it('should wrap from z to a', () => {
    expect(caesarCipher('xyz', 1)).toBe('yza');
  });

  it('should keep the same case', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    expect(caesarCipher('hello, world!', 3)).toBe('khoor, zruog!');
  });

  it('should handle punctuation and non-letter characters', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    expect(caesarCipher('!@#$%^&*()123', 3)).toBe('!@#$%^&*()123');
  });
});
