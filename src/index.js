class Calculator {
  add = (a, b) => a + b

  subtract = (a, b) => a - b

  divide = (a, b) => {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }

  multiply = (a, b) => a * b
}

function stringLength(string) {
  if (string.length > 0 && string.length <= 10) {
    return string.length;
  }
  throw new Error('error');
}
function reverseString(string) { return string.split('').reverse().join(''); }

function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error('Input must be a string');
  }
  return string.charAt(0).toLocaleUpperCase() + string.slice(1);
}

module.exports = {
  stringLength, reverseString, Calculator, capitalize,
};
