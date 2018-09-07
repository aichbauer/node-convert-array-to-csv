import { checkSpecialCharsAndEmpty } from '../helpers/check-special-chars-and-empty';

export const convertArrayOfObjectsToCSV = (data, { header, separator }) => {
  const array = [...data];
  let csv = '';

  if (header) {
    header.forEach((headerEl, i) => {
      const includesSpecials = checkSpecialCharsAndEmpty(headerEl);
      csv
        += (includesSpecials ? `"${headerEl}"` : headerEl)
        + (Object.keys(header).length - 1 === i ? '' : separator)
        + (Object.keys(header).length - 1 === i ? '\n' : '');
    });
  }

  array.forEach((row, idx) => {
    if (!header && idx === 0) {
      Object.keys(row).forEach((key, i) => {
        const value = key || '';
        const includesSpecials = checkSpecialCharsAndEmpty(value);

        csv
          += (includesSpecials ? `"${value}"` : value)
          + (Object.keys(row).length - 1 === i ? '' : separator)
          + (Object.keys(row).length - 1 === i ? '\n' : '');
      });
    }
    Object.keys(row).forEach((key, i) => {
      const value = row[key] || '';
      const includesSpecials = checkSpecialCharsAndEmpty(value);

      csv
        += (includesSpecials ? `"${value}"` : value)
        + (Object.keys(row).length - 1 === i ? '' : separator)
        + (Object.keys(row).length - 1 === i ? '\n' : '');
    });
  });

  return csv;
};
