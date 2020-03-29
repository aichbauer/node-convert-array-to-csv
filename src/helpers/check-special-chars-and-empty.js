export const checkSpecialCharsAndEmpty = (value) => {
  const thisValue = value.toString().toLowerCase();
  let hasSpecialChars = false;
  if (typeof value === 'string') {
    hasSpecialChars = thisValue.length === 0 || /[\n\t,;."'`´ ]/.test(thisValue);
  }

  return hasSpecialChars;
};
