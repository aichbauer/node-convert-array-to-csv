const SYMBOLS = '\\n\\t,;.\'"`´ ';

export const checkSpecialCharsAndEmpty = (value, separator = null) => {
  const thisValue = value.toString().toLowerCase();
  let hasSpecialChars = false;
  if (typeof value === 'string') {
    let regexp = SYMBOLS;
    if (typeof separator !== 'undefined' && separator !== null && !SYMBOLS.includes(separator)) {
      regexp += separator;
    }
    hasSpecialChars = thisValue.length === 0 || new RegExp(`[${regexp}]`).test(thisValue);
  }

  return hasSpecialChars;
};
