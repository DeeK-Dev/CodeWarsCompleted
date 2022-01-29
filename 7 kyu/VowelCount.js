/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

function getCount(str) {
    let newStr = str;
    var vowelsCount = 0;
    let vowels = ['a','e','i','o','u'];
    for (let i = 0; i<newStr.length;++i) {
      for (let j = 0; j<vowels.length;++j) {
        if (newStr[i]===vowels[j]) {
          vowelsCount++
        }
      }
    }
    return vowelsCount;
  }

  //Regex is awesome
  function getCountTwo(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

  //another
  function getCountThree(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }