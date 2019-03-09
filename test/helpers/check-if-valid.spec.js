const { checkIfValid } = require('../../lib/helpers/check-if-valid');

test('checkIfValid | wrong data', () => {
  const result = () => checkIfValid({});

  expect(result).toThrow(
    'data has to be typeof: object and instanceof Array: true but got typeof: object and instanceof Array: false',
  );
});
