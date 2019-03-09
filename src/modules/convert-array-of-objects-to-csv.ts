import { appendElement } from '../helpers/append-element';
import { UndefinedHandle } from '../helpers/undefined-handle';
import { ICSVOptions } from '../interfaces';

export const convertArrayOfObjectsToCSV = (
  data: Array<any>,
  { header, separator }: ICSVOptions = {},
) => {
  const array = [...data];
  let csv = '';

  if (header) {
    header.forEach((headerEl: any, i: any) => {
      const thisHeaderEl = headerEl || '';
      csv += appendElement(thisHeaderEl, header.length, i, UndefinedHandle(separator));
    });
  }

  array.forEach((row: any, idx: any) => {
    const thisRow = Object.keys(row);
    if (!header && idx === 0) {
      thisRow.forEach((key, i) => {
        const value = key || '';
        csv += appendElement(value, thisRow.length, i, UndefinedHandle(separator));
      });
    }

    thisRow.forEach((key: any, i: any) => {
      const value = row[key] || '';
      csv += appendElement(value, thisRow.length, i, UndefinedHandle(separator));
    });
  });

  return csv;
};
