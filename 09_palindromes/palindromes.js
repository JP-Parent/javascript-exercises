// const palindromes = function (string) {
//     string = string.toLowerCase();
//     var punctuationLess = string.replace(/[!,." "]/g, "");
//     var stringArray = [];
//     for (var i = 0; i < punctuationLess.length; i++) {
//         stringArray.push(punctuationLess.charAt(i));
//     }

//     var reverseArray = stringArray.toReversed();
//     for (var i = 0; i < stringArray.length; i++) {
//         if (stringArray[i] !== reverseArray[i]) return false;
//     }
//     return true;
// };

const palindromes = function (string) {
    const alphanumeric = "abcdefghijklmnopqrstuvwxyz1234567890"

    var goodString = string
    .toLowerCase()
    .split("")
    .filter((x) => alphanumeric.includes(x))
    .join("");

    var reverseString = goodString.split("").reverse().join("");
    return goodString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
