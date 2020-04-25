export const checkSeparator = (separator) => {
  if (!/^[^\n"]$/.test(separator)) {
    throw new Error('The separator must be single-character and cannot be a newline or double quotes');
  }
};
