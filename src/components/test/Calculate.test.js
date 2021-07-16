import calculate from '../../logic/Calculate';

describe('calculate', () => {
  it('Should treat Caculate as a function', () => {
    expect(typeof calculate).toEqual('function');
  });

});