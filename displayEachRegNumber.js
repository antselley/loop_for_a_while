var displayEachRegNumber = function(string) {
  var array = string.split(",");
  for (item in array) {
    console.log(array[item].trim());
  }
}

displayEachRegNumber("CA 453 928, CJ 348 293 ,274 239 GP") ;
