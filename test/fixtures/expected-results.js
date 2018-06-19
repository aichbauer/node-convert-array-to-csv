export const expectedResultArrayNoHeaderNoOptions = '1,Mark,Otto,@mdo\n2,Jacob,Thornton,@fat\n3,Larry,the Bird,@twitter\n';

export const expectedResultObjectNoOptions = 'number,first,last,handle\n1,Mark,Otto,@mdo\n2,Jacob,Thornton,@fat\n3,Larry,the Bird,@twitter\n';

export const expectedResultObjectOnlyHeader = 'Number,First,Last,Handle\n1,Mark,Otto,@mdo\n2,Jacob,Thornton,@fat\n3,Larry,the Bird,@twitter\n';

export const expectedResultObjectNullAndUndefined = 'Number,First,Last,Handle\n1,Mark,"",@mdo\n2,Jacob,Thornton,""\n3,Larry,the Bird,@twitter\n';

export const expectedResultArrayNullAndUndefined = 'number,first,last,handle\n1,Mark,"",@mdo\n2,Jacob,Thornton,""\n3,Larry,the Bird,@twitter\n';

export const expectedResultArrayZero = 'number,first,last,handle\n0,Mark,Otto,@mdo\n1,Jacob,Thornton,@fat\n2,Larry,the Bird,@twitter\n';

export const expectedResultObjectHeaderSeparatorSemicolon = 'Number;First;Last;Handle\n1;Mark;Otto;@mdo\n2;Jacob;Thornton;@fat\n3;Larry;the Bird;@twitter\n';

export const expectedResultObjecOnlySeparatorTab = 'number\tfirst\tlast\thandle\n1\tMark\tOtto\t@mdo\n2\tJacob\tThornton\t@fat\n3\tLarry\tthe Bird\t@twitter\n';

export const expectedResultArrayWithHeaderNoOptions = expectedResultObjectNoOptions;

export const expectedResultArrayOnlyHeader = expectedResultObjectOnlyHeader;

export const expectedResultArrayHeaderSeparatorSemicolon =
  expectedResultObjectHeaderSeparatorSemicolon;

export const expectedResultArrayOnlySeparatorTab = expectedResultObjecOnlySeparatorTab;

