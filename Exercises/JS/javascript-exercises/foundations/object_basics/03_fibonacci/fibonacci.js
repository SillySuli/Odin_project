const fibonacci = function(num) {

    if (num < 0 || Number.isNaN(num) || typeof num != 'number') return "OOPS";
    if (num == 0) return 0;
    let fib = {
        "1": 1,
        "2": 1,
    };
    
    let cur_len =  2;
    while ( cur_len <num){
        const next = (cur_len + 1).toString()
        fib[next] = fib[cur_len] + fib[cur_len - 1];
        cur_len ++;
    }

    return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;
