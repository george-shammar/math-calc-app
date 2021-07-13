import operate from './Operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operations = ['+', '-', 'X', '÷', '%'];

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
    return data;
  }

  if (buttonName === 'AC') {
    total = '';
    next = '';
    operation = null;
    return data;
  }

  if (buttonName === '.') {
    if (!total) {
      total = '0.';
    }

    if (total && !operation) {
      total += '.';
    }

    if (operation && !next) {
      next += '0.';
    }

    if (operation && next) {
      next += '0.';
    }

    return data;
  }

  if (operations.includes(buttonName)) {
    operation = buttonName;
    return data;
  }

  if (numbers.includes(buttonName)) {
    if (!operation) {
      if (!total) {
        total = buttonName;
      } else {
        total += buttonName;
      }
    } else if (!next) {
      next = buttonName;
    } else {
      next += buttonName;
    }
    return data;
  }

  if (buttonName === '=') {
    let result;
    if (!total && !next) result = 0;
    if (total && !operation && !next) result = total;
    if (total && operation && !next) result = total;
    if (total && operation && next) {
      result = operate(total, next, operation);
    }
    return result;
  }

  return data;
};

export default calculate;
