const reverseString = require('./reverseString');

test('reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('reverse a string', () => {
    expect(reverseString('Howdy')).toBe('ydwoH');
});

test('reverse a string', () => {
    expect(reverseString('Greetings from Earth')).toBe('htraE morf sgniteerG');
});