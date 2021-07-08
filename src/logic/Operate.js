import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
    const result = '';
    if (operation === '+') {
        result = new Big(numberOne + numberTwo);
        return result;
    } else if (operation === '-') {
        result = new Big(numberOne - numberTwo);
        return result;
    } else if (operation === 'X') {
        result = new Big(numberOne * numberTwo);
        return result;
    } else if (operation === '÷') {
        result = new Big(numberOne/numberTwo);
        return result;
    } else if (operation === '%') {
        result = numberOne/100;
        return result;
    } else {
        result = '0';
        return result;
    }
}

export default operate;