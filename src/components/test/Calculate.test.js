import calculate from '../../logic/Calculate';

describe('calculate', () => {
  it('Should treat Caculate as a function', () => {
    expect(typeof calculate).toEqual('function');
  });

  it('Should return an object', () => {
    const result = calculate({ total: null, next: null, operation: null }, 45);
    expect(typeof result).toEqual('object');
  });


  it('Should return a string as Total', () => {
    const result = calculate({ total: '6', next: null, operation: null }, 13);
    expect(typeof result.total).toEqual('string');
  });

  it('If  operation, number will be added to the next', () => {
    const result = calculate({ total: '6', next: null, operation: '+' }, '9');
    expect(result.total).toEqual('6');
    expect(result.next).toEqual('9');
  });

  it('Should add number to total if next and operation is null', () => {
    const result = calculate({ total: '1', next: null, operation: null }, '4');
    expect(result.total).toEqual('14');
  });

  it('Should return 0 if operation is AC', () => {
    const result = calculate({ total: null, next: null, operation: null }, 'AC');
    expect(result).toEqual({ next: null, operation: null, total: 0 });
  });

  it('Should place . inbetween total and next if operation is "."', () => {
    const result = calculate({ total: null, next: null, operation: null }, '.');
    expect(result).toEqual({ next: null, operation: null, total: '0.' });
  });

  it('Should add neagtive to total and next if operation is "+/-"', () => {
    const result = calculate({ total: '2', next: null, operation: null }, '+/-');
    expect(result).toEqual({ next: -0, operation: null, total: -2 });
  });
});