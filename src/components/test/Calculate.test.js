import calculate from '../../logic/Calculate';

describe('calculate', () => {
  it('Should treat Caculate as a function', () => {
    expect(typeof calculate).toEqual('function');
  });

  it('Should return an object', () => {
    const result = calculate({ total: null, next: null, operation: null }, 45);
    expect(typeof result).toEqual('object');
  });

});