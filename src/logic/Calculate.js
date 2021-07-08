import Big from 'big.js';
import operate from './Operate';

const calculate = (buttonName, data) => {
  if (buttonName == "+/-") {
      const newTotal = data.total * -1;
      const newNext = data.next * -1;
  }
};

export default calculate;
