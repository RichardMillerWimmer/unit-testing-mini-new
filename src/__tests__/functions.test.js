import { add } from '../utils/functions';

test('checks that add correctly returns the sum of two numbers', () => {
    expect(add(1, 2)).toBe(3)
});

test('checks that add will correctly add two string numbers', () => {
    expect(add('1', '2')).toBe(3)
});

test('checks that add will return NaN when non-numbers are passed', () => {
    expect(add('word', 'word')).toBeNaN()
});

