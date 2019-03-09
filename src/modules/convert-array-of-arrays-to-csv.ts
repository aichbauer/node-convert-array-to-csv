// import { checkSpecialCharsAndEmpty } from '../helpers/check-special-chars-and-empty';

import { appendElement } from '../helpers/append-element';
import { UndefinedHandle } from '../helpers/undefined-handle';
import { ICSVOptions } from '../interfaces';

export const convertArrayOfArraysToCSV = (
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

  array.forEach((row: Array<any>) => {
    row.forEach((value, i) => {
      const thisValue = value || (value === 0 ? 0 : '');
      csv += appendElement(thisValue, row.length, i, UndefinedHandle(separator));
    });
  });

  return csv;
};
