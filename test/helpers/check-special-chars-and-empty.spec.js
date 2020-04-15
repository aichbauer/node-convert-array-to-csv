import { checkSpecialCharsAndEmpty } from '../../src/helpers/check-special-chars-and-empty';

test('checkIfValid | newline', () => {
  const result = checkSpecialCharsAndEmpty('\n');

  expect(result).toBeTruthy();
});

test('checkIfValid | tab, tab separator', () => {
  const result = checkSpecialCharsAndEmpty('\t', '\t');

  expect(result).toBeTruthy();
});

test('checkIfValid | tab, default separator', () => {
  const result = checkSpecialCharsAndEmpty('\t');

  expect(result).toBeFalsy();
});

test('checkIfValid | comma, comma separator', () => {
  const result = checkSpecialCharsAndEmpty(',', ',');

  expect(result).toBeTruthy();
});

test('checkIfValid | comma, default separator', () => {
  const result = checkSpecialCharsAndEmpty(',');

  expect(result).toBeFalsy();
});

test('checkIfValid | semicolon, semicolon separator', () => {
  const result = checkSpecialCharsAndEmpty(';', ';');

  expect(result).toBeTruthy();
});

test('checkIfValid | semicolon, default separator', () => {
  const result = checkSpecialCharsAndEmpty(';');

  expect(result).toBeFalsy();
});

test('checkIfValid | dot, dot separator', () => {
  const result = checkSpecialCharsAndEmpty('.', '.');

  expect(result).toBeTruthy();
});

test('checkIfValid | dot, default separator', () => {
  const result = checkSpecialCharsAndEmpty('.');

  expect(result).toBeFalsy();
});

test('checkIfValid | single quote, single quote separator', () => {
  const result = checkSpecialCharsAndEmpty('\'', '\'');

  expect(result).toBeTruthy();
});

test('checkIfValid | single quote, default separator', () => {
  const result = checkSpecialCharsAndEmpty('\'');

  expect(result).toBeFalsy();
});

test('checkIfValid | no value', () => {
  const result = checkSpecialCharsAndEmpty('');

  expect(result).toBeTruthy();
});

test('checkIfValid | pipe, pipe separator', () => {
  const result = checkSpecialCharsAndEmpty('|', '|');

  expect(result).toBeTruthy();
});

test('checkIfValid | pipe, default separator', () => {
  const result = checkSpecialCharsAndEmpty('|');

  expect(result).toBeFalsy();
});

test('checkIfValid | normal value', () => {
  const result = checkSpecialCharsAndEmpty('hello');

  expect(result).toBeFalsy();
});

test('checkIfValid | double quote, double quote separator', () => {
  const result = checkSpecialCharsAndEmpty('"', '"');

  expect(result).toBeTruthy();
});

test('checkIfValid | double quote, default separator', () => {
  const result = checkSpecialCharsAndEmpty('"');

  expect(result).toBeTruthy();
});
