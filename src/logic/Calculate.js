import Big from 'big.js';
import operate from './Operate';

const calculate = (buttonName, data) => {
  const dataObject = { total: 0, next: 0, operation: '' };
  if (buttonName === "+/-") {
      dataObject.total = new Big(data.total * -1);
      dataObject.next = new Big(data.next * -1);
  } else if (buttonName === ".") {
    dataObject.total = new Big(`${data.total}.${data.total}`);
  } else if (buttonName === "AC") {
    dataObject.total = '0';
  } else {
    dataObject.total = new Big(data.total);
  }

  if (buttonName === '+' || buttonName === '-' || buttonName === 'X' || buttonName === '÷' || buttonName === '%') {
    dataObject.total = operate(data.total, data.next, buttonName);
  }

  return dataObject;
};

export default calculate;
