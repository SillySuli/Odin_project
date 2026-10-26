const palindromes = function (word) {

    word = word.toLowerCase().split("").filter(char =>{
        return /[a-zA-Z0-9]/.test(char);
    }).join("");
    const wordReverse = word.split("").reverse().join("");
    const res = word == wordReverse ? true : false;
    return res;
};

// Do not edit below this line
module.exports = palindromes;
