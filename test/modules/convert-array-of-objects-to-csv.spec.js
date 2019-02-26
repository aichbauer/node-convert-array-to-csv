import { convertArrayOfObjectsToCSV } from '../../src/modules/convert-array-of-objects-to-csv';

import {
  dataObject,
  dataObjectWithNullAndUndefined,
  dataObjectWithDoubleQuotesInsideElement,
} from '../fixtures/data';
import {
  optionsHeaderSeperatorSemicolon,
  optionsHeaderSeparatorDefault,
  optionsHeaderDefaultSeperatorTab,
  optionsDefault,
} from '../fixtures/options';

import {
  expectedResultObjectNoOptions,
  expectedResultObjectHeaderSeparatorSemicolon,
  expectedResultObjectOnlyHeader,
  expectedResultObjecOnlySeparatorTab,
  expectedResultObjectNullAndUndefined,
  expectedResultObjectWithDoubleQoutesInsideElement,
} from '../fixtures/expected-results';

test('convertArrayOfObjectsToCSV | array of objects | with default options', () => {
  const result = convertArrayOfObjectsToCSV(dataObjectWithDoubleQuotesInsideElement, optionsDefault); // eslint-disable-line

  expect(result).toBe(expectedResultObjectWithDoubleQoutesInsideElement);
});

test('convertArrayOfObjectsToCSV | array of objects | with default options and double quotes in element', () => {
  const result = convertArrayOfObjectsToCSV(dataObject, optionsDefault);

  expect(result).toBe(expectedResultObjectNoOptions);
});

test('convertArrayOfObjectsToCSV | array of objects | options: header + separator semicolon', () => {
  const result = convertArrayOfObjectsToCSV(dataObject, optionsHeaderSeperatorSemicolon);

  expect(result).toBe(expectedResultObjectHeaderSeparatorSemicolon);
});

test('convertArrayOfObjectsToCSV | array of objects | options: header + default separator', () => {
  const result = convertArrayOfObjectsToCSV(dataObject, optionsHeaderSeparatorDefault);

  expect(result).toBe(expectedResultObjectOnlyHeader);
});

test('convertArrayOfObjectsToCSV | array of objects | options: default header + separator tab', () => {
  const result = convertArrayOfObjectsToCSV(dataObject, optionsHeaderDefaultSeperatorTab);

  expect(result).toBe(expectedResultObjecOnlySeparatorTab);
});

test('convertArrayOfObjectsToCSV | array of objects with values of null and undefined | options: header + default separator', () => {
  const result = convertArrayOfObjectsToCSV(
    dataObjectWithNullAndUndefined,
    optionsHeaderSeparatorDefault,
  );

  expect(result).toBe(expectedResultObjectNullAndUndefined);
});
