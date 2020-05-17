import { checkSpecialCharsAndEmpty } from './check-special-chars-and-empty';

const separatorOrLineBreak = (length, elementIdx, separator) => (
  length - 1 === elementIdx ? '\n' : separator
);

const escapeDoubleQuotesInsideElement = (element) => element.replace(/"/g, '""');

const appendElement = (element, lineLength, elementIdx, separator) => {
  const includesSpecials = checkSpecialCharsAndEmpty(element, separator);

  let thisElement = element;

  if (includesSpecials) {
    thisElement = escapeDoubleQuotesInsideElement(thisElement);
  }
  const afterElement = separatorOrLineBreak(lineLength, elementIdx, separator);

  return (
    includesSpecials ? `"${thisElement}"${afterElement}` : `${thisElement}${afterElement}`
  );
};

export { appendElement };
