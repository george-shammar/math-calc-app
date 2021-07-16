import operate from '../../logic/Operate';

describe(' Operate', () => {
  it('Should make operate a function', () => {
    expect(typeof operate).toEqual('function');
  });

  it('Should return a string', () => {
    const result = operate('34', '45', '+');
    expect(typeof result).toEqual('string');
  });

  it('Should add two numbers together', () => {
    const result = operate('20', '30', '+');
    expect(result).toBe('50');
  });

  it('Should not return null for addition', () => {
    const result = operate('20', '30', '+');
    expect(result).not.toBe(null);
  });

  it('Should subtract two numbers', () => {
    const result = operate('22', '11', '-');
    expect(result).toEqual('11');
  });

  it('Should not return a null value for subtraction', () => {
    const result = operate('22', '11', '-');
    expect(result).not.toBe(null);
  });

  it('Should divide two numbers', () => {
    const result = operate('100', '10', '÷');
    expect(result).toEqual('10');
  });

  it('Should not return null for division', () => {
    const result = operate('100', '10', '÷');
    expect(result).not.toBe(null);
  });

  it('Should multiply two numbers', () => {
    const result = operate('20', '20', 'X');
    expect(result).toEqual('400');
    expect(result).not.toBe(null);
  });

  it('Should not return null for multiplication', () => {
    const result = operate('20', '20', 'X');
    expect(result).not.toBe(null);
  });
});
