import { appendElement } from '../helpers/append-element';
import { valueOrEmpty } from '../helpers/value-or-empty';

export const convertArrayOfObjectsToCSV = (data, { header, separator }) => {
  const array = [...data];
  let csv = '';

  if (header) {
    header.forEach((headerEl, i) => {
      const thisHeaderEl = valueOrEmpty(headerEl);

      csv += appendElement(thisHeaderEl, header.length, i, separator);
    });
  }

  array.forEach((row, idx) => {
    const thisRow = Object.keys(row);
    if (!header && idx === 0) {
      thisRow.forEach((key, i) => {
        const value = valueOrEmpty(key);

        csv += appendElement(value, thisRow.length, i, separator);
      });
    }

    thisRow.forEach((key, i) => {
      const value = valueOrEmpty(row[key]);

      csv += appendElement(value, thisRow.length, i, separator);
    });
  });

  return csv;
};
