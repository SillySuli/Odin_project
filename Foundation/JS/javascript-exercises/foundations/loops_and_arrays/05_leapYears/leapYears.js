const leapYears = function(year) {
    
    if (!(year%100) && year%400){
        return false;
    }
    if (!(year%4)){
        return true;
    }
    return false;

};

// Do not edit below this line
module.exports = leapYears;
