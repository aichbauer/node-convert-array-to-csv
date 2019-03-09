export const checkIfValid = (data: any) => {
  if (!Array.isArray(data)) {
    throw new Error(
      `data has to be typeof: ${typeof []} and instanceof Array: ${[] instanceof
        Array} but got typeof: ${typeof data} and instanceof Array: ${data instanceof Array}`,
    );
  }
};
