const fibonacci = function(a) {
    const fib = [0,1];
    var count;
    
    if(typeof a !== "number"){
    	count = parseInt(a);
    }
    else count = a

    if (count < 0) return "OOPS"

    for(var i = 2; i <= count; i++){
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib[count];
};

// Do not edit below this line
module.exports = fibonacci;
