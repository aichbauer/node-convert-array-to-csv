import { checkSpecialCharsAndEmpty } from '../helpers/check-special-chars-and-empty';

export const convertArrayOfArraysToCSV = (data, { header, separator }) => {
  const array = [...data];
  let csv = '';

  if (header) {
    header.forEach((headerEl, i) => {
      const thisHeaderEl = headerEl || '';
      const includesSpecials = checkSpecialCharsAndEmpty(thisHeaderEl);
      csv
        += (includesSpecials ? `"${thisHeaderEl}"` : thisHeaderEl)
        + (Object.entries(header).length - 1 === i ? '' : separator)
        + (Object.entries(header).length - 1 === i ? '\n' : '');
    });
  }

  array.forEach((row) => {
    row.forEach((value, i) => {
      const thisValue = value || (value === 0 ? 0 : '');
      const includesSpecials = checkSpecialCharsAndEmpty(thisValue);
      csv
        += (includesSpecials ? `"${thisValue}"` : thisValue)
        + (row.length - 1 === i ? '' : separator)
        + (row.length - 1 === i ? '\n' : '');
    });
  });

  return csv;
};
