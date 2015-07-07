/*  smallestMultiple(multiplicands, digits)
 *
 *  @param numbers        the amount of numbers to multiply by
 *
 *  @returns the smallest positive number that is evenly divisible by all numbers
 */
module.exports = function(numbers){
  var multiple = numbers;
  var highestFactor = numbers;
  // var startNumber = highestFactor * (highestFactor -1) ;
  while(multiple < 100000000000000){
    var n = numbers;
    while(n > 1){
      var found = true;
      if(multiple%n !== 0){
        found = false;
        break;
      }
      n--;
    }
    if(found){
      return multiple;
    }
    multiple += highestFactor;

  }
};