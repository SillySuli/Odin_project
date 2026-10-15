const convertToCelsius = function(num) {
  
  return Math.round(((num - 32) * (5/9)) * 10) / 10;
};

const convertToFahrenheit = function(num) {

  return Math.round((32 + num * (9/5)) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
