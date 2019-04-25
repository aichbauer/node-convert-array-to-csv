export const checkSpecialCharsAndEmpty = (value) => {
  const thisValue = value.toString().toLowerCase();
  let hasSpecialChars = false;
  if (typeof value === 'string') {
    hasSpecialChars = thisValue.includes('\n')
    || thisValue.includes('\t')
    || thisValue.includes(',')
    || thisValue.includes(';')
    || thisValue.includes('.')
    || thisValue.includes('"')
    || thisValue.includes('\'')
    || thisValue.includes('`')
    || thisValue.includes('´')
    || thisValue.includes(' ')
    || thisValue.length === 0;
  }

  return hasSpecialChars;
};
