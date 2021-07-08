import Big from 'big.js';
import operate from './Operate';

const calculate = (buttonName, data) => {
  if (buttonName === "+/-") {
      const newTotal = new Big(data.total * -1);
      const newNext = new Big(data.next * -1);
      return data;
  } else if (buttonName === ".") {

  }
};

export default calculate;
