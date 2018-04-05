import converter, { convertArrayToCSV } from '../lib';

import {
  dataArrayWithoutHeader,
  dataObject,
} from './fixtures/data';

import {
  expectedResultArrayNoHeaderNoOptions,
  expectedResultObjectNoOptions,
} from './fixtures/expected-results';

test('convertArrayToCsv | array of arrays | with no header and no options', () => {
  const result = convertArrayToCSV(dataArrayWithoutHeader);

  expect(result).toBe(expectedResultArrayNoHeaderNoOptions);
});

test('convertArrayToCsv | array of objects | with no options', () => {
  const result = convertArrayToCSV(dataObject);

  expect(result).toBe(expectedResultObjectNoOptions);
});

test('default export | array of arrays | with no header and no options', () => {
  const result = converter(dataArrayWithoutHeader);

  expect(result).toBe(expectedResultArrayNoHeaderNoOptions);
});

test('default export | array of objects | with no options', () => {
  const result = converter(dataObject);

  expect(result).toBe(expectedResultObjectNoOptions);
});

test('convertArrayToCsv | not an array | with no options', () => {
  const result = () => convertArrayToCSV({});

  expect(result).toThrow('data has to be typeof: object and instanceof Array: true but got typeof: object and instanceof Array: false');
});
