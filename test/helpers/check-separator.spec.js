import { checkSeparator } from '../../src/helpers/check-separator';

const ERROR_MESSAGE = 'The separator must be single-character and cannot be a newline or double quotes';

test('checkSeparator | wrong separator | newline', () => {
  const result = () => checkSeparator('\n');

  expect(result).toThrow(ERROR_MESSAGE);
});

test('checkSeparator | wrong separator | double quotes', () => {
  const result = () => checkSeparator('"');

  expect(result).toThrow(ERROR_MESSAGE);
});

test('checkSeparator | wrong separator | two symbols', () => {
  const result = () => checkSeparator('ab');

  expect(result).toThrow(ERROR_MESSAGE);
});

test('checkSeparator | supported separator', () => {
  const result = () => checkSeparator('|');

  expect(result).not.toThrow(ERROR_MESSAGE);
});
