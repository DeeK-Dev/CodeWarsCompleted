/*

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

*/

function fakeBin(x){
    let newArr = x.split('').map(item => {
       return (item <5 ? 0 : 1)
    })
    return newArr.join('')
  }

  //More elegant

  function fakeBinTwo(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}