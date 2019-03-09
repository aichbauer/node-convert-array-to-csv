const headerArray = [['number', 'first', 'last', 'handle']];

const dataArray = [
  [1, 'Mark', 'Otto', '@mdo'],
  [2, 'Jacob', 'Thornton', '@fat'],
  [3, 'Larry', 'the Bird', '@twitter'],
];

const dataArrayWithDoubleQuotes = [
  [1, 'Mark', 'Ot"to', '@mdo'],
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
    last: 'Ot"to',
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

exports.dataArrayWithHeader = [...headerArray, ...dataArray];

exports.dataArrayWithDoubleQuotesInsideElement = [...dataArrayWithDoubleQuotes];

exports.dataArrayWithoutHeader = [...dataArray];

exports.dataObject = [...data];

exports.dataObjectWithDoubleQuotesInsideElement = [...dataObjectWithDoubleQuotes];

exports.dataObjectWithNullAndUndefined = [...dataWithNullAndUndefined];

exports.dataArrayWithHeaderAndNullAndUndefined = [...headerArray, ...dataArrayWithNullAndUndefined];

exports.dataArrayWithHeaderAndZero = [...headerArray, ...dataArrayWithZero];
