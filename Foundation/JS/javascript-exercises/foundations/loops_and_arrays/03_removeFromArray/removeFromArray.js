const removeFromArray = function(arr, ...theArgs) {
    
    let res = arr;
    for( let i = 1; i < arguments.length ; i ++){
        res = res.filter((num) => {return num !== arguments[i]});
    }
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
