export const checkSpecialCharsAndEmpty = (value) => {
  const thisValue = value.toString().toLowerCase();

  const hasSpecialChars = thisValue.includes('\n')
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

  return hasSpecialChars;
};
