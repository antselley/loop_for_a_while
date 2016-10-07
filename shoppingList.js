var shoppingLIst = function(string) {
  var array = string.split(",");
  for (item in array) {
    console.log(array[item]);
  }
}

shoppingLIst("Butter,Raisin Bread,Cheese,Coffee") ;
