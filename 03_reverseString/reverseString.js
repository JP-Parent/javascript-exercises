const reverseString = function(string) {
    if(str === "") return"";

    else return reverseString(string.substr(1) + str.charAt(0));
};

// Do not edit below this line
module.exports = reverseString;
