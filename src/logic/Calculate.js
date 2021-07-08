import Big from 'big.js';
import operate from './Operate';

const calculate = (buttonName, data) => {
  const dataObject = { total: 0, next: 0, operation: '' };
  if (buttonName === "+/-") {
      const newTotal = new Big(data.total * -1);
      const newNext = new Big(data.next * -1);
      return data;
  } else if (buttonName === ".") {

  }
};

export default calculate;
