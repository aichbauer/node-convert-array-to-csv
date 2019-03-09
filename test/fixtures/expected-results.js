const expectedResultArrayNoHeaderNoOptions =
  '1,Mark,Otto,@mdo\n2,Jacob,Thornton,@fat\n3,Larry,"the Bird",@twitter\n';

const expectedResultObjectNoOptions =
  'number,first,last,handle\n1,Mark,Otto,@mdo\n2,Jacob,Thornton,@fat\n3,Larry,"the Bird",@twitter\n';

const expectedResultObjectOnlyHeader =
  'Number,First,Last,Handle\n1,Mark,Otto,@mdo\n2,Jacob,Thornton,@fat\n3,Larry,"the Bird",@twitter\n';

const expectedResultObjectNullAndUndefined =
  'Number,First,Last,Handle\n1,Mark,"",@mdo\n2,Jacob,Thornton,""\n3,Larry,"the Bird",@twitter\n';

const expectedResultArrayNullAndUndefined =
  'number,first,last,handle\n1,Mark,"",@mdo\n2,Jacob,Thornton,""\n3,Larry,"the Bird",@twitter\n';

const expectedResultArrayZero =
  'number,first,last,handle\n0,Mark,Otto,@mdo\n1,Jacob,Thornton,@fat\n2,Larry,"the Bird",@twitter\n';

const expectedResultObjectHeaderSeparatorSemicolon =
  'Number;First;Last;Handle\n1;Mark;Otto;@mdo\n2;Jacob;Thornton;@fat\n3;Larry;"the Bird";@twitter\n';

const expectedResultObjecOnlySeparatorTab =
  'number\tfirst\tlast\thandle\n1\tMark\tOtto\t@mdo\n2\tJacob\tThornton\t@fat\n3\tLarry\t"the Bird"\t@twitter\n';

const expectedResultArrayHeaderWithSpaces =
  '"number number",first,last,handle\n1,Mark,Otto,@mdo\n2,Jacob,Thornton,@fat\n3,Larry,"the Bird",@twitter\n';

const expectedResultArrayWithDoubleQoutesInsideElement =
  '1,Mark,"Ot""to",@mdo\n2,Jacob,Thornton,@fat\n3,Larry,"the Bird",@twitter\n';

const expectedResultArrayWithHeaderNoOptions = expectedResultObjectNoOptions;

const expectedResultArrayOnlyHeader = expectedResultObjectOnlyHeader;

const expectedResultArrayHeaderSeparatorSemicolon = expectedResultObjectHeaderSeparatorSemicolon; // eslint-disable-line

const expectedResultArrayOnlySeparatorTab = expectedResultObjecOnlySeparatorTab;

const expectedResultObjectWithDoubleQoutesInsideElement = `number,first,last,handle\n${expectedResultArrayWithDoubleQoutesInsideElement}`; // eslint-disable-line

module.exports = {
  expectedResultArrayNoHeaderNoOptions,

  expectedResultObjectNoOptions,
  expectedResultObjectOnlyHeader,
  expectedResultObjectNullAndUndefined,

  expectedResultArrayNullAndUndefined,

  expectedResultArrayZero,

  expectedResultObjectHeaderSeparatorSemicolon,

  expectedResultObjecOnlySeparatorTab,

  expectedResultArrayHeaderWithSpaces,

  expectedResultArrayWithDoubleQoutesInsideElement,

  expectedResultArrayWithHeaderNoOptions,

  expectedResultArrayOnlyHeader,

  expectedResultArrayHeaderSeparatorSemicolon,

  expectedResultArrayOnlySeparatorTab,
};
