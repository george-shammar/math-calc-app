import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
    const result = '';
    if (operation === '+') {
        result = numberOne + numberTwo;
        return result;
    } else if (operation === '-') {
        result = numberOne - numberTwo;
        return result;
    } else if (operation === 'X') {
        result = numberOne * numberTwo;
        return result;
    } else if (operation === '÷') {
        result = numberOne/numberTwo;
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