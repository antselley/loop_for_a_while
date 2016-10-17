const assert = require('assert');

var wordLengths = function (sentence) {

  ///Create a list of all the words
  var wordList = sentence.split(' ');

  ///Loop through the words, finding their lengths and adding that to a counter variable - which needs to be initialized
  var sumOfAllWords = 0;

  for (i=0; i<wordList.length; i++) {
    sumOfAllWords += wordList[i].length ;
  }
  return sumOfAllWords;
}

assert.equal(wordLengths("Easy sentence again"), 17);
assert.equal(wordLengths("Just as easy a sentence again"), 24);
