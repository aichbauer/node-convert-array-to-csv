const headerArray = [
  ['number', 'first', 'last', 'handle'],
];

const dataArray = [
  [1, 'Mark', 'Otto', '@mdo'],
  [2, 'Jacob', 'Thornton', '@fat'],
  [3, 'Larry', 'the Bird', '@twitter'],
];

const dataArrayWithDoubleQuotes = [
  [1, 'Mark', 'Ot"t"o', '@mdo'],
  [2, 'Jacob', 'Thornton', '@fat'],
  [3, 'Larry', 'the Bird', '@twitter'],
];

const dataArrayWithNullAndUndefined = [
  [1, 'Mark', null, '@mdo'],
  [2, 'Jacob', 'Thornton', undefined],
  [3, 'Larry', 'the Bird', '@twitter'],
];

const dataArrayWithZero = [
  [0, 'Mark', 'Otto', '@mdo'],
  [1, 'Jacob', 'Thornton', '@fat'],
  [2, 'Larry', 'the Bird', '@twitter'],
];

const dataArrayWithFloat = [
  [1.001, 'Mark', 'Otto', '@mdo'],
  [2.002, 'Jacob', 'Thornton', '@fat'],
  [3.33, 'Larry', 'the Bird', '@twitter'],
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

const dataObjectWithDoubleQuotes = [
  {
    number: 1,
    first: 'Mark',
    last: 'Ot"t"o',
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

const dataWithNullAndUndefined = [
  {
    number: 1,
    first: 'Mark',
    last: null,
    handle: '@mdo',
  },
  {
    number: 2,
    first: 'Jacob',
    last: 'Thornton',
    handle: undefined,
  },
  {
    number: 3,
    first: 'Larry',
    last: 'the Bird',
    handle: '@twitter',
  },
];

const dataWithFloat = [
  {
    number: 1.001,
    first: 'Mark',
    last: 'Otto',
    handle: '@mdo',
  },
  {
    number: 2.002,
    first: 'Jacob',
    last: 'Thornton',
    handle: '@fat',
  },
  {
    number: 3.33,
    first: 'Larry',
    last: 'the Bird',
    handle: '@twitter',
  },
];

const dataWith0 = [
  {
    0: 0,
    first: 'Mark',
    last: 'Otto',
    '': '@mdo',
  },
  {
    0: 1,
    first: 'Jacob',
    last: 'Thornton',
    '': '@fat',
  },
  {
    0: 2,
    first: 'Larry',
    last: 'the Bird',
    '': '@twitter',
  },
];

export const dataArrayWithHeader = [
  ...headerArray,
  ...dataArray,
];

export const dataArrayWithDoubleQuotesInsideElement = [
  ...dataArrayWithDoubleQuotes,
];

export const dataArrayWithoutHeader = [
  ...dataArray,
];

export const dataObject = [
  ...data,
];

export const dataObjectWithDoubleQuotesInsideElement = [
  ...dataObjectWithDoubleQuotes,
];

export const dataObjectWithNullAndUndefined = [
  ...dataWithNullAndUndefined,
];

export const dataObjectWithFloat = [
  ...dataWithFloat,
];

export const dataObjectWith0 = [
  ...dataWith0,
];

export const dataArrayWithHeaderAndNullAndUndefined = [
  ...headerArray,
  ...dataArrayWithNullAndUndefined,
];

export const dataArrayWithHeaderAndFloats = [
  ...headerArray,
  ...dataArrayWithFloat,
];

export const dataArrayWithHeaderAndZero = [
  ...dataArrayWithZero,
];
