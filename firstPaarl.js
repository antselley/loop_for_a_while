var firstPaarl = function(string) {
  // Turn the string list into an array//
  var array = string.split(",");

// Trim out unneeded spaces //
  for (item in array) {
    array[item] = array[item].trim();
  }

// Finding and printing the first one from paarl...
  for (item in array) {
    if (array[item].startsWith('CJ')) {
      console.log(array[item]);
      break;
    }
  }
}

firstPaarl("CA 453 928, CJ 348 293 ,274 239 GP, CJ 219 549") ;
