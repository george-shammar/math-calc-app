import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = '';
  if (operation === '+') {
    result = new Big(numberOne.plus(numberTwo));
  } else if (operation === '-') {
    result = new Big(numberOne.minus(numberTwo));
  } else if (operation === 'X') {
    result = new Big(numberOne.times(numberTwo));
  } else if (operation === '÷') {
    result = new Big(numberOne.div(numberTwo));
  } else if (operation === '%') {
    result = new Big(numberOne / 100);
  } else {
    result = '0';
  }

  return result.toString();
};

export default operate;
