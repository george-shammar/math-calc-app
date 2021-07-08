import Big from 'big.js';
import operate from './Operate';

const calculate = (buttonName, data) => {
  const dataObject = { total: 0, next: 0, operation: '' };
  if (buttonName === "+/-") {
      dataObject.total = new Big(data.total * -1);
      dataObject.next = new Big(data.next * -1);
  } else if (buttonName === ".") {
    dataObject.total = `${data.total}.${data.total}`;
  }
};

export default calculate;
