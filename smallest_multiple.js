/*  smallestMultiple(multiplicands, digits)
 *
 *  @param numbers        the amount of numbers to multiply by
 *
 *  @returns the smallest positive number that is evenly divisible by all numbers
 */
module.exports = function(numbers){
  var smallestMultiple = numbers;
  var highestFactor = numbers;
  // var startNumber = highestFactor * (highestFactor -1) ;
  while(smallestMultiple < Infinity){
    var n = numbers;
    while(n > 1){
      var failed = false ;
      if(smallestMultiple%n !== 0){
        failed = true;
        break;
      }
      n--;
    }
    if(!failed){
      return smallestMultiple;
    }
    smallestMultiple += highestFactor;
  }
};