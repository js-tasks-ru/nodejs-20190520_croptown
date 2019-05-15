function sum(a, b) {
  if (typeof a && typeof b === 'number') {
    return a+b;
  } else {
    throw new TypeError('Введенное значение не является числом!');
  }
  
}

module.exports = sum;
