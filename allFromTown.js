var allFromTown = function(string, areaCode) {
  // Turn the string list into an array//
  var array = string.split(",");
  var listFromTown = [];

// Trim out unneeded spaces //
  for (item in array) {
    array[item] = array[item].trim();
  }

// Finding and printing those from given place
  for (item in array) {
    if (array[item].startsWith(areaCode)) {
      listFromTown.push(array[item]);
    }
  }
  return listFromTown;
}

var fromPaarl = allFromTown("CA 453 928, CJ 348 293 ,274 239 GP, CJ 219 549", "CJ") ;
console.log(fromPaarl);

var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
console.log(fromStellies);
