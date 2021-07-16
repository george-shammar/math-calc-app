import calculate from '../../logic';

describe('calculate', () => {
  it('Should treat Caculate as a function', () => {
    expect(typeof calculate).toEqual('function');
  });

});