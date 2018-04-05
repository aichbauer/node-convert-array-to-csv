import { convertArrayOfObjectsToCSV } from '../../lib/modules/convert-array-of-objects-to-csv';

import { dataObject } from '../fixtures/data';
import {
  optionsHeaderSeperatorSemicolon,
  optionsOnlyHeader,
  optionsOnlySeperatorTab,
} from '../fixtures/options';

import {
  expectedResultObjectNoOptions,
  expectedResultObjectHeaderSeparatorSemicolon,
  expectedResultObjectOnlyHeader,
  expectedResultObjecOnlySeparatorTab,
} from '../fixtures/expected-results';

test('convertArrayOfObjectsToCSV | array of objects | with no options', () => {
  const result = convertArrayOfObjectsToCSV(dataObject);

  expect(result).toBe(expectedResultObjectNoOptions);
});

test('convertArrayOfObjectsToCSV | array of objects | options: header + seperator semicolon', () => {
  const result = convertArrayOfObjectsToCSV(dataObject, optionsHeaderSeperatorSemicolon);

  expect(result).toBe(expectedResultObjectHeaderSeparatorSemicolon);
});

test('convertArrayOfObjectsToCSV | array of objects | options: header', () => {
  const result = convertArrayOfObjectsToCSV(dataObject, optionsOnlyHeader);

  expect(result).toBe(expectedResultObjectOnlyHeader);
});

test('convertArrayOfObjectsToCSV | array of objects | options: separator tab', () => {
  const result = convertArrayOfObjectsToCSV(dataObject, optionsOnlySeperatorTab);

  expect(result).toBe(expectedResultObjecOnlySeparatorTab);
});
