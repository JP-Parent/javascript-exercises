const removeFromArray = function(array, ...args) {
   var newArray = array.filter(x => !args.includes(x))

   return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
