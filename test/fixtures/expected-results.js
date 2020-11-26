export const expectedResultArrayNoHeaderNoOptions = '1,Mark,Otto,@mdo\n2,Jacob,Thornton,@fat\n3,Larry,the Bird,@twitter\n';

export const expectedResultObjectNoOptions = 'number,first,last,handle\n1,Mark,Otto,@mdo\n2,Jacob,Thornton,@fat\n3,Larry,the Bird,@twitter\n';

export const expectedResultObjectNoHeader = '1,Mark,Otto,@mdo\n2,Jacob,Thornton,@fat\n3,Larry,the Bird,@twitter\n';

export const expectedResultObjectOnlyHeader = 'Number,First,Last,Handle\n1,Mark,Otto,@mdo\n2,Jacob,Thornton,@fat\n3,Larry,the Bird,@twitter\n';

export const expectedResultObjectNullAndUndefined = 'Number,First,Last,Handle\n1,Mark,"",@mdo\n2,Jacob,Thornton,""\n3,Larry,the Bird,@twitter\n';

export const expectedResultArrayNullAndUndefined = 'number,first,last,handle\n1,Mark,"",@mdo\n2,Jacob,Thornton,""\n3,Larry,the Bird,@twitter\n';

export const expectedResultArrayWithFloats = 'number,first,last,handle\n1.001,Mark,Otto,@mdo\n2.002,Jacob,Thornton,@fat\n3.33,Larry,the Bird,@twitter\n';

export const expectedResultObjectWithFloats = 'number,first,last,handle\n1.001,Mark,Otto,@mdo\n2.002,Jacob,Thornton,@fat\n3.33,Larry,the Bird,@twitter\n';

export const expectedResultArrayBooleans = 'description,value\ntrue as boolean,true\nfalse as boolean,false\ntrue as string,true\nfalse as string,false\n1 as number,1\n0 as number,0\n1 as string,1\n0 as string,0\nNaN,""\nempty string,""\n';

export const expectedResultArrayZero = '0,first,last,""\n0,Mark,Otto,@mdo\n1,Jacob,Thornton,@fat\n2,Larry,the Bird,@twitter\n';

export const expectedResultObjectZero = '0,first,last,""\n0,Mark,Otto,@mdo\n1,Jacob,Thornton,@fat\n2,Larry,the Bird,@twitter\n';

export const expectedResultObjectHeaderSeparatorSemicolon = 'Number;First;Last;Handle\n1;Mark;Otto;@mdo\n2;Jacob;Thornton;@fat\n3;Larry;the Bird;@twitter\n';

export const expectedResultObjectOnlySeparatorTab = 'number\tfirst\tlast\thandle\n1\tMark\tOtto\t@mdo\n2\tJacob\tThornton\t@fat\n3\tLarry\tthe Bird\t@twitter\n';

export const expectedResultObjectOnlySeparatorPipe = 'number|first|last|handle\n1|"Mark | 1"|Otto|@mdo\n2|"Jacob | 2"|Thornton|@fat\n3|"Larry | 3"|the Bird|@twitter\n';

export const expectedResultArrayHeaderWithSpaces = 'number number,first,last,handle\n1,Mark,Otto,@mdo\n2,Jacob,Thornton,@fat\n3,Larry,the Bird,@twitter\n';

export const expectedResultArrayWithDoubleQuotesInsideElement = '1,Mark,"Ot""t""o",@mdo\n2,Jacob,Thornton,@fat\n3,Larry,the Bird,@twitter\n';

export const expectedResultArrayWithHeaderNoOptions = expectedResultObjectNoOptions;

export const expectedResultArrayOnlyHeader = expectedResultObjectOnlyHeader;

export const expectedResultArrayHeaderSeparatorSemicolon = expectedResultObjectHeaderSeparatorSemicolon; // eslint-disable-line

export const expectedResultArrayOnlySeparatorTab = expectedResultObjectOnlySeparatorTab;

export const expectedResultArrayOnlySeparatorPipe = expectedResultObjectOnlySeparatorPipe;

export const expectedResultObjectWithDoubleQuotesInsideElement = `number,first,last,handle\n${expectedResultArrayWithDoubleQuotesInsideElement}`; // eslint-disable-line
