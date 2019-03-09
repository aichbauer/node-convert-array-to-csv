import { checkIfValid } from './helpers/check-if-valid';
import { convertArrayOfArraysToCSV } from './modules/convert-array-of-arrays-to-csv';
import { convertArrayOfObjectsToCSV } from './modules/convert-array-of-objects-to-csv';
import { ICSVOptions } from './interfaces';

const convertArrayToCSV = (data: Array<any>, { header, separator }: ICSVOptions = {}) => {
  checkIfValid(data);

  const thisOptions = {
    header,
    separator: separator || ',',
  };

  if (Array.isArray(data[0])) {
    return convertArrayOfArraysToCSV(data, thisOptions);
  }

  return convertArrayOfObjectsToCSV(data, thisOptions);
};

export { convertArrayToCSV };
