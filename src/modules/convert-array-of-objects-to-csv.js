import { checkSpecialCharsAndEmpty } from '../helpers/check-special-chars-and-empty';

export const convertArrayOfObjectsToCSV = (data, { header, separator }) => {
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

  array.forEach((row, idx) => {
    if (!header && idx === 0) {
      Object.entries(row).forEach((entry, i) => {
        const key = entry[0];
        const includesSpecials = checkSpecialCharsAndEmpty(key);

        csv +=
          (includesSpecials ? `"${key}"` : key) +
          (Object.entries(row).length - 1 === i ? '' : separator) +
          (Object.entries(row).length - 1 === i ? '\n' : '');
      });
    }
    Object.entries(row).forEach((entry, i) => {
      const value = entry[1];
      const includesSpecials = checkSpecialCharsAndEmpty(value);

      csv +=
        (includesSpecials ? `"${value}"` : value) +
        (Object.entries(row).length - 1 === i ? '' : separator) +
        (Object.entries(row).length - 1 === i ? '\n' : '');
    });
  });

  return csv;
};
