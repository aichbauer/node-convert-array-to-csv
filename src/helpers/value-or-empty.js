export const valueOrEmpty = (data) => {
  if (data || data === false || data === 0) {
    return data;
  }

  return '';
};
