import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = '';
  if (operation === '+') {
    result = new Big(numberOne + numberTwo);
  } else if (operation === '-') {
    result = new Big(numberOne - numberTwo);
  } else if (operation === 'X') {
    result = new Big(numberOne * numberTwo);
  } else if (operation === '÷') {
    result = new Big(numberOne / numberTwo);
  } else if (operation === '%') {
    result = new Big(numberOne / 100);
  } else {
    result = '0';
  }

  return result.toString();
};

export default operate;
