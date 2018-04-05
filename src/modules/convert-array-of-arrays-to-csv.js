import { checkSpecialCharsAndEmpty } from '../helpers/check-special-chars-and-empty';

export const convertArrayOfArraysToCSV = (data, { header, separator }) => {
  const array = [...data];
  let csv = '';

  if (header) {
    header.forEach((headerEl, i) => {
      const includesSpecials = checkSpecialCharsAndEmpty(headerEl);
      csv +=
        (includesSpecials ? `"${headerEl}"` : headerEl) +
        (Object.entries(header).length - 1 === i ? '' : separator) +
        (Object.entries(header).length - 1 === i ? '\n' : '');
    });
  }

  array.forEach((row) => {
    row.forEach((value, i) => {
      const includesSpecials = checkSpecialCharsAndEmpty(value);
      csv +=
        (includesSpecials ? `"${value}"` : value) +
        (row.length - 1 === i ? '' : separator) +
        (row.length - 1 === i ? '\n' : '');
    });
  });

  return csv;
};
