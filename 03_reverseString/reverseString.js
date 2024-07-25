const reverseString = function(string) {
    var reverserString = "";
    for(var i = string.length -1; i >= 0; i--){
        reverserString += string[i];
    }
    return reverserString;
};

// Do not edit below this line
module.exports = reverseString;
