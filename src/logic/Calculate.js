import operate from './Operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operations = ['+', '-', 'X', '÷'];

  if (buttonName === 'AC') {
    total = 0;
    next = null;
    operation = null;
  }

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  }

  if (buttonName === '.') {
    if (!total) {
      total = '0.';
    }

    if (total && !next) {
      if (operation) {
        next += '0.';
      } else if (total.indexOf('.') === -1) {
        total += '.';
      }
    }

    if (total && operation && next) {
      if (next.indexOf('.') === -1) {
        next += '.';
      }
    }
  }

  if (buttonName === '%') {
    if (!next) {
      total /= 100;
    } else {
      next /= 100;
    }
  }

  if (operations.includes(buttonName)) {
    if (!total) total = '0';
    if (total && !next) {
      operation = buttonName;
    }
    if (total && next && operation) {
      total = operate(total, next, operation);
    }
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
  }

  if (buttonName === '=') {
    if (total && !next) {
      const result = total;
      total = result;
    }
    if (!total && !next) {
      total = '0';
    }
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }

  return { total, next, operation };
};

export default calculate;
