const headerArray = [
  ['number', 'first', 'last', 'handle'],
];

const dataArray = [
  [1, 'Mark', 'Otto', '@mdo'],
  [2, 'Jacob', 'Thornton', '@fat'],
  [3, 'Larry', 'the Bird', '@twitter'],
];

const data = [
  {
    number: 1,
    first: 'Mark',
    last: 'Otto',
    handle: '@mdo',
  },
  {
    number: 2,
    first: 'Jacob',
    last: 'Thornton',
    handle: '@fat',
  },
  {
    number: 3,
    first: 'Larry',
    last: 'the Bird',
    handle: '@twitter',
  },
];

export const dataArrayWithHeader = [
  ...headerArray,
  ...dataArray,
];

export const dataArrayWithoutHeader = [
  ...dataArray,
];

export const dataObject = [
  ...data,
];
