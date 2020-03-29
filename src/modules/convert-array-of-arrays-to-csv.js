import { appendElement } from '../helpers/append-element';
import { valueOrEmpty } from '../helpers/value-or-empty';

export const convertArrayOfArraysToCSV = (data, { header, separator }) => {
  const array = [...data];
  let csv = '';

  if (header) {
    header.forEach((headerEl, i) => {
      const thisHeaderEl = valueOrEmpty(headerEl);

      csv += appendElement(thisHeaderEl, header.length, i, separator);
    });
  }

  array.forEach((row) => {
    row.forEach((value, i) => {
      const thisValue = valueOrEmpty(value);

      csv += appendElement(thisValue, row.length, i, separator);
    });
  });

  return csv;
};
