const capitalize = require('./capitalize');

test('takes a string and returns it with the first character capitalized', () => {
    expect(capitalize('string')).toBe('String');
});