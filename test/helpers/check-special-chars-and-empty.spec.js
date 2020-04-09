import { checkSpecialCharsAndEmpty } from '../../src/helpers/check-special-chars-and-empty';

test('checkIfValid | newline', () => {
  const result = checkSpecialCharsAndEmpty('\n');

  expect(result).toBeTruthy();
});

test('checkIfValid | tab', () => {
  const result = checkSpecialCharsAndEmpty('\t');

  expect(result).toBeTruthy();
});

test('checkIfValid | ,', () => {
  const result = checkSpecialCharsAndEmpty(',');

  expect(result).toBeTruthy();
});

test('checkIfValid | ;', () => {
  const result = checkSpecialCharsAndEmpty(';');

  expect(result).toBeTruthy();
});

test('checkIfValid | .', () => {
  const result = checkSpecialCharsAndEmpty('.');

  expect(result).toBeTruthy();
});

test('checkIfValid | "', () => {
  const result = checkSpecialCharsAndEmpty('"');

  expect(result).toBeTruthy();
});

test('checkIfValid | \'', () => {
  const result = checkSpecialCharsAndEmpty('\'');

  expect(result).toBeTruthy();
});

test('checkIfValid | `', () => {
  const result = checkSpecialCharsAndEmpty('`');

  expect(result).toBeTruthy();
});

test('checkIfValid | ´', () => {
  const result = checkSpecialCharsAndEmpty('´');

  expect(result).toBeTruthy();
});

test('checkIfValid | no value', () => {
  const result = checkSpecialCharsAndEmpty('');

  expect(result).toBeTruthy();
});

test('checkIfValid | pipe as separator, pipe in text', () => {
  const result = checkSpecialCharsAndEmpty('|', '|');

  expect(result).toBeTruthy();
});

test('checkIfValid | pipe in text, default separator', () => {
  const result = checkSpecialCharsAndEmpty('|');

  expect(result).toBeFalsy();
});

test('checkIfValid | normal value', () => {
  const result = checkSpecialCharsAndEmpty('hello');

  expect(result).toBeFalsy();
});
