import { convertArrayOfArraysToCSV } from '../../lib/modules/convert-array-of-arrays-to-csv';

import {
  dataArrayWithHeader,
  dataArrayWithoutHeader,
} from '../fixtures/data';
import {
  optionsHeaderSeperatorSemicolon,
  optionsOnlyHeader,
  optionsOnlySeperatorTab,
} from '../fixtures/options';

import {
  expectedResultArrayWithHeaderNoOptions,
  expectedResultArrayNoHeaderNoOptions,
  expectedResultArrayOnlyHeader,
  expectedResultArrayHeaderSeparatorSemicolon,
  expectedResultArrayOnlySeparatorTab,
} from '../fixtures/expected-results';

test('convertArrayOfArraysToCSV | array of arrays | with no options', () => {
  const result = convertArrayOfArraysToCSV(dataArrayWithHeader);

  expect(result).toBe(expectedResultArrayWithHeaderNoOptions);
});

test('convertArrayOfArraysToCSV | array of arrays | with no options and no header', () => {
  const result = convertArrayOfArraysToCSV(dataArrayWithoutHeader);

  expect(result).toBe(expectedResultArrayNoHeaderNoOptions);
});

test('convertArrayOfArraysToCSV | array of arrays | with no options and no header', () => {
  const result = convertArrayOfArraysToCSV(dataArrayWithoutHeader);

  expect(result).toBe(expectedResultArrayNoHeaderNoOptions);
});

test('convertArrayOfArraysToCSV | array of arrays | options: header + seperator semicolon', () => {
  const result = convertArrayOfArraysToCSV(dataArrayWithoutHeader, optionsHeaderSeperatorSemicolon);

  expect(result).toBe(expectedResultArrayHeaderSeparatorSemicolon);
});

test('convertArrayOfArraysToCSV | array of arrays | options: header ', () => {
  const result = convertArrayOfArraysToCSV(dataArrayWithoutHeader, optionsOnlyHeader);

  expect(result).toBe(expectedResultArrayOnlyHeader);
});

test('convertArrayOfArraysToCSV | array of arrays | options: separator tab ', () => {
  const result = convertArrayOfArraysToCSV(dataArrayWithHeader, optionsOnlySeperatorTab);

  expect(result).toBe(expectedResultArrayOnlySeparatorTab);
});
