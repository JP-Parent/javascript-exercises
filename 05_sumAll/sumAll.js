const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1)
        || !Number.isInteger(num2)
        || num1 < 0
        || num2 < 0) 
    return "ERROR"

    else 
    var smallNum = num1;
    var bigNum = num2;
    var result = 0;
    if(num1 > num2){
        bigNum = num1;
        smallNum = num2;
    }
    for(var i = smallNum; i <= bigNum; i++){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
