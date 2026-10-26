const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(numArray) {
  const res = numArray.reduce( (total, curNum) => {
    return total + curNum;
}, 0);
  return res;
};

const multiply = function(numArray) {
  const res = numArray.reduce( (total, curNum) => {
    return total*curNum;
}, 1);
  return res;
};


const power = function(base, exponent) {
  return base**exponent;
};

const factorial = function(num) {
  if (num == 0) return 1;
  const factorialArray = [];
  while (num > 1){
    factorialArray.push(num);
    num--;
  }
  console.log(factorialArray);
  return this.multiply(factorialArray);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
