const assert = require('assert');

var totalPhoneBill = function(string) {
  var callCost = 2.75;
  var smsCost = 0.65;
  var phoneList = string.split(",");
  var numCalls = 0;
  var numSmss = 0;

  // trim the list
      for (item in phoneList) {
        phoneList[item] = phoneList[item].trim();
        }

      for (element in phoneList) {
        if (phoneList[element] === "call") {
          numCalls += 1;
        }

        if (phoneList[element] === "sms") {
          numSmss +=1;
        }
      }
      var totalCost = numCalls*callCost + numSmss*smsCost ;
      return totalCost;
    }

;

assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 7.45);
assert.equal(totalPhoneBill('call, sms, call, sms'), 6.8);
