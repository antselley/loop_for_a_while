const assert = require('assert');

var countAllFromTown = function(string, areaCode) {
  // Turn the string list into an array//
  var array = string.split(",");
  var listFromTown = [];

// Trim out unneeded spaces //
  for (item in array) {
    array[item] = array[item].trim();
  }

// Find those from given place and count how many there are...
  for (item in array) {
    if (array[item].startsWith(areaCode)) {
      listFromTown.push(array[item]);
    }
  }
  return listFromTown.length;
}

var numFromPaarl = countAllFromTown("CA 453 928, CJ 348 293 ,274 239 GP, CJ 219 549", "CJ") ;
var numFromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');

assert.equal(countAllFromTown("CA 453 928, CJ 348 293 ,274 239 GP, CJ 219 549", "CJ"), 2);
assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),3);
