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
    }
}