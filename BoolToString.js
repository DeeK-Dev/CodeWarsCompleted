/*

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.

*/

function booleanToString(b){
    return b ? 'true' : 'false';
  }

//another, stupidly simple way

function booleanToString(b){
    return b.toString();
  }