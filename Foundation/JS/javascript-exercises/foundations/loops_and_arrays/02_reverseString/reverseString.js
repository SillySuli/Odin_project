const reverseString = function(str) {

    let splittedString = str.split("");
    let reversedArray = splittedString.reverse();
    return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
