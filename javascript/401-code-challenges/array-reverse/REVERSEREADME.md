Data Structures and Algorithms
401 Code Challenge 1
Problem domain

writing a function called reverseArray that intakes an array as an argument. Return that array with the elements in reversed order without using any of the built-in methods in your language.

input: array output: reverse array

Test Cases (what could go wrong) -empty array -contents of array matter? , data type? , array of other data structures?

Visualization

[1, 2, 3, 4, 5] to [5, 4, 3, 2, 1]

step 1. create a pointer on numbers 1 and 5 that allows you to switch them step 2. repeat with 2 and 4 leave 3 alone resulting in [5, 4, 3, 2, 1]

Algorithm

declare reverseArray function that taes and array as parameter

create front variable and assign the first index of the array -create end varibale and dynaically assign the last index of the array

while end index is greater than the front index -create a temporary variable and assign the front value -assign end to front -assign temp to end -incrment front variable -decrement end variable

output the modified array

PseudoCode:
reverseArray <- function arr <- input

front <- indox 0 of array end <- array length minus 1

while end is greater than front temp <- front front <- end end <- temporary increment front decrement end

return array

Code:
function reverseArr(arr){ let front=0 let end = arr.length-1;

while (end > front) { let temp = arr[front]; arr[front]=arr[end]; arr[end]=temp; front++; end--; } return arr; }

Common things to test:
off by errors data type confirmation all of out test casses/ what ifs does it work large scale

Front:0, 1 , 2, 2

End:4 , 3 , 2

Result[5,2,3,4,1], [5,4,3,2,1]