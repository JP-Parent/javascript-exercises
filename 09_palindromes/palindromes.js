const palindromes = function (string) {
    string = string.toLowerCase();
    var punctuationLess = string.replace(/[!,." "]/g, "");
    var stringArray = [];
    for (var i = 0; i < punctuationLess.length; i++) {
        stringArray.push(punctuationLess.charAt(i));
    }

    var reverseArray = stringArray.toReversed();
    for (var i = 0; i < stringArray.length; i++) {
        if (stringArray[i] !== reverseArray[i]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
