
import { checkSpecialCharsAndEmpty } from './check-special-chars-and-empty';

const separatorOrLineBreak = (length, elementIdx, separator) => (
  length - 1 === elementIdx ? '\n' : separator
);

const appendElement = (element, lineLength, elementIdx, separator) => {
  const includesSpecials = checkSpecialCharsAndEmpty(element);

  return (
    includesSpecials
      ? `"${element}"${separatorOrLineBreak(lineLength, elementIdx, separator)}`
      : `${element}${separatorOrLineBreak(lineLength, elementIdx, separator)}`
  );
};

export { appendElement };
