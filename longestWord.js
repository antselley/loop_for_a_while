const assert = require('assert');

var longestWord = function(sentence) {

  //Make a list of all the words in the sentence
  wordList = sentence.split(' ');
  //Initialize a longest word variable. Then loop through the words and update it to contain the longest word
  var langsteWoord=[] ;
  var lengthOfLongestWords = 0;
  for (i=0 ; i<wordList.length ; i++) {

    if (wordList[i].length > lengthOfLongestWords) {
      langsteWoord = [];
      langsteWoord.push(wordList[i]);
      lengthOfLongestWords = wordList[i].length ;
    }

    else if (wordList[i].length === lengthOfLongestWords) {
      langsteWoord.push(wordList[i]);
    }
  }
  return langsteWoord
}


assert.equal(longestWord("This is a random sentence to test the racecarss"), 'racecarss');
assert.equal(longestWord("Let's make up another sentence to see if this works fantastically at all"), 'fantastically');
