const assert = require('assert');

var shortestWord = function(sentence) {

  //Make a list of all the words in the sentence
  wordList = sentence.split(' ');
  //Initialize a shortest word variable. Then loop through the words and update it to contain the shortest word
  var kortsteWoord=[] ;
  var lengthOfShortestWords = 1000;
  for (i=0 ; i<wordList.length ; i++) {

    if (wordList[i].length < lengthOfShortestWords) {
      kortsteWoord = [];
      kortsteWoord.push(wordList[i]);
      lengthOfShortestWords = wordList[i].length ;
    }

    else if (wordList[i].length === lengthOfShortestWords) {
      kortsteWoord.push(wordList[i]);
    }
  }
  return kortsteWoord;
}

assert.equal(shortestWord("This is a random sentence to test the racecars"), 'a');
assert.equal(shortestWord("Nog woordelys"), 'Nog');
