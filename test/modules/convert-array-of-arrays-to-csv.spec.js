const { convertArrayOfArraysToCSV } = require('../../lib/modules/convert-array-of-arrays-to-csv');

const {
  dataArrayWithHeader,
  dataArrayWithoutHeader,
  dataArrayWithHeaderAndNullAndUndefined,
  dataArrayWithHeaderAndZero,
  dataArrayWithDoubleQuotesInsideElement,
} = require('../fixtures/data');
const {
  optionsHeaderSeperatorSemicolon,
  optionsHeaderSeparatorDefault,
  optionsHeaderDefaultSeperatorTab,
  optionsDefault,
} = require('../fixtures/options');

const {
  expectedResultArrayWithHeaderNoOptions,
  expectedResultArrayNoHeaderNoOptions,
  expectedResultArrayOnlyHeader,
  expectedResultArrayHeaderSeparatorSemicolon,
  expectedResultArrayOnlySeparatorTab,
  expectedResultArrayNullAndUndefined,
  expectedResultArrayZero,
  expectedResultArrayWithDoubleQoutesInsideElement,
} = require('../fixtures/expected-results');

test('convertArrayOfArraysToCSV | array of arrays | with default options', () => {
  const result = convertArrayOfArraysToCSV(dataArrayWithHeader, optionsDefault);

  expect(result).toBe(expectedResultArrayWithHeaderNoOptions);
});

test('convertArrayOfArraysToCSV | array of arrays | with default options and double quotes in element', () => {
  const result = convertArrayOfArraysToCSV(dataArrayWithDoubleQuotesInsideElement, optionsDefault);

  expect(result).toBe(expectedResultArrayWithDoubleQoutesInsideElement);
});

test('convertArrayOfArraysToCSV | array of arrays | with default options and no header', () => {
  const result = convertArrayOfArraysToCSV(dataArrayWithoutHeader, optionsDefault);

  expect(result).toBe(expectedResultArrayNoHeaderNoOptions);
});

test('convertArrayOfArraysToCSV | array of arrays | with default options and no header', () => {
  const result = convertArrayOfArraysToCSV(dataArrayWithoutHeader, optionsDefault);

  expect(result).toBe(expectedResultArrayNoHeaderNoOptions);
});

test('convertArrayOfArraysToCSV | array of arrays | options: header + separator semicolon', () => {
  const result = convertArrayOfArraysToCSV(dataArrayWithoutHeader, optionsHeaderSeperatorSemicolon);

  expect(result).toBe(expectedResultArrayHeaderSeparatorSemicolon);
});

test('convertArrayOfArraysToCSV | array of arrays | options: header + default separator', () => {
  const result = convertArrayOfArraysToCSV(dataArrayWithoutHeader, optionsHeaderSeparatorDefault);

  expect(result).toBe(expectedResultArrayOnlyHeader);
});

test('convertArrayOfArraysToCSV | array of arrays | options: default header + separator tab', () => {
  const result = convertArrayOfArraysToCSV(dataArrayWithHeader, optionsHeaderDefaultSeperatorTab);

  expect(result).toBe(expectedResultArrayOnlySeparatorTab);
});

test('convertArrayOfArraysToCSV | array of arrays with values of null and undefined | options: header + default separator', () => {
  const result = convertArrayOfArraysToCSV(dataArrayWithHeaderAndNullAndUndefined, optionsDefault);

  expect(result).toBe(expectedResultArrayNullAndUndefined);
});

test('convertArrayOfArraysToCSV | array of arrays with value of zero | with default options and header', () => {
  const result = convertArrayOfArraysToCSV(dataArrayWithHeaderAndZero, optionsDefault);

  expect(result).toBe(expectedResultArrayZero);
});
