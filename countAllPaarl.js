var countAllPaarl = function(string) {
  // Turn the string list into an array//
  var array = string.split(",");

// Trim out unneeded spaces //
  for (item in array) {
    array[item] = array[item].trim();
  }

// Finding and counting reg numbers from paarl...
var numFromPaarl = 0;
  for (item in array) {
    if (array[item].startsWith('CJ')) {
      numFromPaarl += 1;
    }
  }
  console.log(numFromPaarl);
  // console.log() can be removed if necessary! I like to have it in for now...
  return numFromPaarl ;
}

countAllPaarl("CA 453 928, CJ 348 293 ,274 239 GP, CJ 219 549, CA 383 229, CJ 734 928") ;
