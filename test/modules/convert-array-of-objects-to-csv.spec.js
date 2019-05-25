import { convertArrayOfObjectsToCSV } from '../../src/modules/convert-array-of-objects-to-csv';

import {
  dataObject,
  dataObjectWithNullAndUndefined,
  dataObjectWithDoubleQuotesInsideElement,
  dataObjectWithFloat,
  dataObjectWith0,
} from '../fixtures/data';
import {
  optionsHeaderSeperatorSemicolon,
  optionsHeaderSeparatorDefault,
  optionsHeaderDefaultSeperatorTab,
  optionsDefault,
  optionsHeaderZero,
} from '../fixtures/options';

import {
  expectedResultObjectNoOptions,
  expectedResultObjectHeaderSeparatorSemicolon,
  expectedResultObjectOnlyHeader,
  expectedResultObjecOnlySeparatorTab,
  expectedResultObjectNullAndUndefined,
  expectedResultObjectWithDoubleQoutesInsideElement,
  expectedResultObjectWithFloats,
  expectedResultObjectZero,
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

test('convertArrayOfObjectsToCSV | array of objects with float | options: default header', () => {
  const result = convertArrayOfObjectsToCSV(dataObjectWithFloat, optionsDefault);

  expect(result).toBe(expectedResultObjectWithFloats);
});

test('convertArrayOfObjectsToCSV | array of objects with value of zero | options: header with zero and "" + default separator', () => {
  const result = convertArrayOfObjectsToCSV(dataObjectWith0, optionsHeaderZero);

  expect(result).toBe(expectedResultObjectZero);
});

test('convertArrayOfObjectsToCSV | array of objects with value of zero | options: default header + default separator', () => {
  const result = convertArrayOfObjectsToCSV(dataObjectWith0, optionsDefault);

  expect(result).toBe(expectedResultObjectZero);
});
