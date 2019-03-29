
import { checkSpecialCharsAndEmpty } from './check-special-chars-and-empty';

const separatorOrLineBreak = (length, elementIdx, separator) => (
  length - 1 === elementIdx ? '\n' : separator
);

const escapeDoubleQuotesInsideElement = (element) => {
  const thisElement = element.replace(/"/g, '""');

  return thisElement;
};

const appendElement = (element, lineLength, elementIdx, separator) => {
  const includesSpecials = checkSpecialCharsAndEmpty(element);

  let thisElement = element;

  if (includesSpecials) {
    thisElement = escapeDoubleQuotesInsideElement(thisElement);
  }

  return (
    includesSpecials
      ? `"${thisElement}"${separatorOrLineBreak(lineLength, elementIdx, separator)}`
      : `${thisElement}${separatorOrLineBreak(lineLength, elementIdx, separator)}`
  );
};

export { appendElement };
