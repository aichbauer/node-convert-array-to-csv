import { checkIfValid } from './helpers/check-if-valid';
import { checkSeparator } from './helpers/check-separator';
import { convertArrayOfArraysToCSV } from './modules/convert-array-of-arrays-to-csv';
import { convertArrayOfObjectsToCSV } from './modules/convert-array-of-objects-to-csv';

export const convertArrayToCSV = (data, { header, separator } = {}) => {
  checkIfValid(data);

  const thisOptions = {
    header,
    separator: separator || ',',
  };

  checkSeparator(thisOptions.separator);

  if (Array.isArray(data[0])) {
    return convertArrayOfArraysToCSV(data, thisOptions);
  }

  return convertArrayOfObjectsToCSV(data, thisOptions);
};

export default convertArrayToCSV;
