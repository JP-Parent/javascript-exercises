const repeatString = function(word, times) {
    if (word === null){
        return Error;
    }
    else if (times < 0){
        return Error;
    }

    else {
        var string = "";
        for (var i=0; i < times; i++){
            string += word;
        }
        return string;
    }
};

// Do not edit below this line
module.exports = repeatString;
