'use strict'
function repeatedWord(str){
  for (var i = 0; i <= str.length; i++) {
    for (var j = i + 1; j <= str.length; j++) {
      if (str[j] == str[i]) {
        return str;
      }else{
return (null)
      };
