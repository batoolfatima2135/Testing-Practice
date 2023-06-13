const functions = require('../src/index.js');

// Tests for stringlength function
describe('stringLenght', () => {
  test('string length "car" is 3', () => {
    expect(functions.stringLength('car')).toBe(3);
  });
  test('string length "together" is 8', () => {
    expect(functions.stringLength('together')).toBe(8);
  });
  test('string length "mouse" is 5', () => {
    expect(functions.stringLength('mouse')).toBe(5);
  });
  test('should throw an error when passed a null string', () => {
    expect(() => { functions.stringLength(''); }).toThrow();
  });
  test('should throw an error when passed a string more than 10 character', () => {
    expect(() => { functions.stringLength('mississippissii'); }).toThrow();
  });
});

// Tests for reverseString function
describe('reverseString', () => {
  test('"car" should return "rac"', () => {
    expect(functions.reverseString('car')).toBe('rac');
  });
  test('"kite" should return "etik"', () => {
    expect(functions.reverseString('kite')).toBe('etik');
  });
  test('"hand" should return "dnah"', () => {
    expect(functions.reverseString('hand')).toBe('dnah');
  });
});

// Calculator Class Tests
// Tests for Add method in Class calculator
describe('calculator class method Add', () => {
  const Calculator = new functions.Calculator();
  test('Add method should return 3', () => {
    expect(Calculator.add(2, 1)).toBe(3);
  });
  test('Add method should return 6', () => {
    expect(Calculator.add(3, 3)).toBe(6);
  });
  test('Add method should return 10', () => {
    expect(Calculator.add(5, 5)).toBe(10);
  });
});

// Tests for substact method in Class calculator
describe('calculator class method substact', () => {
  const Calculator = new functions.Calculator();
  test('subtract method should subract numbers correctly and return 1', () => {
    expect(Calculator.subtract(2, 1)).toBe(1);
  });
  test('subtract method should subract numbers correctly and return 8', () => {
    expect(Calculator.subtract(16, 8)).toBe(8);
  });
  test('subtract method should subract numbers correctly and return 2', () => {
    expect(Calculator.subtract(20, 18)).toBe(2);
  });
});

// Tests for multiply method in Class calculator
describe('calculator class method multiply', () => {
  const Calculator = new functions.Calculator();
  test('Multiply method should multiply numbers correctly and return 5', () => {
    expect(Calculator.multiply(5, 1)).toBe(5);
  });
  test('Multiply method should multiply numbers correctly and return 12', () => {
    expect(Calculator.multiply(4, 3)).toBe(12);
  });
  test('Multiply method should multiply numbers correctly and return 35', () => {
    expect(Calculator.multiply(7, 5)).toBe(35);
  });
});

// Tests for divide method in Class calculator
describe('calculator class method divide', () => {
  const Calculator = new functions.Calculator();
  test('divide method should divide numbers correctly and return 7', () => {
    expect(Calculator.divide(14, 2)).toBe(7);
  });
  test('divide method should divide numbers correctly and return 3', () => {
    expect(Calculator.divide(27, 9)).toBe(3);
  });
  test('divide method should divide numbers correctly and return 4', () => {
    expect(Calculator.divide(24, 6)).toBe(4);
  });
  test('divide method should return error if division is with zero', () => {
    expect(() => { Calculator.divide(4, 0); }).toThrow();
  });
});

// Test for capitalize function
describe('capitalize function', () => {
  test('Capitalize function should return "Car" for input "car"', () => {
    expect(functions.capitalize('car')).toBe('Car');
  });
  test('Capitalize function should return "Bike" for input "bike"', () => {
    expect(functions.capitalize('bike')).toBe('Bike');
  });
  test('Capitalize function should return "Ring" for input "ring"', () => {
    expect(functions.capitalize('ring')).toBe('Ring');
  });
  test('Capitalize function should return Error if input is not string', () => {
    expect(() => { functions.capitalize(6); }).toThrow();
  });
});