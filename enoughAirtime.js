const assert = require('assert');

var enoughAirtime = function(string, airtimeInitiallyAvailable) {
//Create a list of all the things which are happening
  var phoneList = string.split(",");

//Trim the list
for (item in phoneList) {
  phoneList[item] = phoneList[item].trim();
  }

//Item costs
  var callCost = 1.88;
  var smsCost = 0.75;
  var dataCost = 12;

// Initialize the counter variables
  var numCalls = 0;
  var numSmss = 0;
  var numData = 0;

// Count how many of each occurence appears
    for (element in phoneList) {
      if (phoneList[element] === "call") {
        numCalls += 1;
          }

      if (phoneList[element] === "sms") {
        numSmss +=1;
          }

      if (phoneList[element] === "data")  {
        numData +=1;
          }
      }

//Figure out the total cost
    var totalCost = numCalls*callCost + numSmss*smsCost + numData*dataCost ;
    var totalRemaining = airtimeInitiallyAvailable - totalCost;

    return Math.max(totalRemaining, 0)
}

assert.equal(enoughAirtime('call,call,call,data,sms,sms,call,data', 35), 1.98);
assert.equal(enoughAirtime('call,call,call,data,sms,sms,call,data', 30), 0);
