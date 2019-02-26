import { appendElement } from '../helpers/append-element';

export const convertArrayOfObjectsToCSV = (data, { header, separator }) => {
  const array = [...data];
  let csv = '';

  if (header) {
    header.forEach((headerEl, i) => {
      const thisHeaderEl = headerEl || '';

      csv += appendElement(thisHeaderEl, header.length, i, separator);
    });
  }

  array.forEach((row, idx) => {
    const thisRow = Object.keys(row);
    if (!header && idx === 0) {
      thisRow.forEach((key, i) => {
        const value = key || '';

        csv += appendElement(value, thisRow.length, i, separator);
      });
    }

    thisRow.forEach((key, i) => {
      const value = row[key] || '';

      csv += appendElement(value, thisRow.length, i, separator);
    });
  });

  return csv;
};
