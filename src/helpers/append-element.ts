import { checkSpecialCharsAndEmpty } from './check-special-chars-and-empty';

const separatorOrLineBreak = (length: number, elementIdx: number, separator: string) =>
  length - 1 === elementIdx ? '\n' : separator;

const escapeDoubleQuotesInsideElement = (element: any) => element.replace('"', '""');

const appendElement = (element: any, lineLength: number, elementIdx: number, separator: string) => {
  const includesSpecials = checkSpecialCharsAndEmpty(element);

  let thisElement = element;

  if (includesSpecials) {
    thisElement = escapeDoubleQuotesInsideElement(thisElement);
  }

  return includesSpecials
    ? `"${thisElement}"${separatorOrLineBreak(lineLength, elementIdx, separator)}`
    : `${thisElement}${separatorOrLineBreak(lineLength, elementIdx, separator)}`;
};

export { appendElement };
