const { convertArrayOfObjectsToCSV } = require('../../lib/modules/convert-array-of-objects-to-csv');

const {
  dataObject,
  dataObjectWithNullAndUndefined,
  dataObjectWithDoubleQuotesInsideElement,
} = require('../fixtures/data');
const {
  optionsHeaderSeperatorSemicolon,
  optionsHeaderSeparatorDefault,
  optionsHeaderDefaultSeperatorTab,
  optionsDefault,
} = require('../fixtures/options');

const {
  expectedResultObjectNoOptions,
  expectedResultObjectHeaderSeparatorSemicolon,
  expectedResultObjectOnlyHeader,
  expectedResultObjecOnlySeparatorTab,
  expectedResultObjectNullAndUndefined,
} = require('../fixtures/expected-results');

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
