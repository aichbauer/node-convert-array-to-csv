# convert-array-to-csv

[![npm](https://img.shields.io/npm/v/convert-array-to-csv.svg?style=flat-square)](https://www.npmjs.com/package/convert-array-to-csv)
[![Travis branch](https://img.shields.io/travis/aichbauer/node-convert-array-to-csv/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/node-convert-array-to-csv)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/node-convert-array-to-csv/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/node-convert-array-to-csv)

> Convert an array to a csv formatted string

## Table of Contents

* [Why?](#why)
* [Installation](#installation)
* [Functions](#functions)
* [Usage](#usage)
* [License](#license)

## Why?

I needed a simple way to download the data from a table component in a csv format.

## Installation

```sh
$ npm i convert-array-to-csv -S
```

or

```sh
$ yarn add convert-array-to-csv
```

## Functions

Take a look into the [usage section](#usage) for a detailed example.

### convertArrayToCSV

> Note: you can also use the default export.

This function converts an array of objects, or an array of arrays into an csv formatted string.

#### Syntax

Returns a new string.

```js
const csv = convertArrayToCSV(data, options);
```

##### Parameters

* data: an array of arrays or an array of objects
* options: a object
  * holds two keys: header and separator
  * **header**: and array with the name of the columns, default: `undefined`
  * **separator**: the character which is the separator in your csv formatted string, default: `','`

## Usage

An example how to use it.

```js
const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');

const header = ['number', 'first', 'last', 'handle'];
const dataArrays = [
  [1, 'Mark', 'Otto', '@mdo'],
  [2, 'Jacob', 'Thornton', '@fat'],
  [3, 'Larry', 'the Bird', '@twitter'],
];
const dataObjects = [
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

/*
  const csvFromArrayOfObjects  = 'number,first,last,handle\n1,Mark,Otto,@mdo\n2,Jacob,Thornton,@fat\n3,Larry,the Bird,@twitter\n';
*/
const csvFromArrayOfObjects = convertArrayToCSV(dataObjects);

/*
  const csvFromArrayOfArrays  = 'number;first;last;handle\n1;Mark;Otto;@mdo\n2;Jacob;Thornton;@fat\n3;Larry;the Bird;@twitter\n';
*/
const csvFromArrayOfArrays = convertArrayToCSV(dataArrays, {
  header,
  separator: ';'
});
```

## License

MIT © Lukas Aichbauer
