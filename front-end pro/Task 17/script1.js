class Calculator {
    add = (a, b) => {
      this._validateNumbers(a, b);
      return a + b;
    };
  
    subtract = (a, b) => {
      this._validateNumbers(a, b);
      return a - b;
    };
  
    multiply = (a, b) => {
      this._validateNumbers(a, b);
      return a * b;
    };
  
    divide = (a, b) => {
      this._validateNumbers(a, b);
      if (b === 0) {
        throw new Error("Division by zero is impossible");
      }
      return a / b;
    };
  
    _validateNumbers = (a, b) => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError("Both arguments must be numbers");
      }
    };
  }
  
  const calc = new Calculator();
  
  console.log(calc.add(5, 3));
  console.log(calc.subtract(10, 4));
  console.log(calc.multiply(3, 6));
  console.log(calc.divide(8, 2));
  
  try {
    console.log(calc.divide(10, 0));
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    console.log(calc.add(5, "three"));
  } catch (error) {
    console.error(error.message);
  }