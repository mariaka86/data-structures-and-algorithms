function Mergesort(arr, compare){

// default sort is small to large
compare = compare ? compare : (a, b) => a < b;
  if (arr.length < 1)return arr
  let mid = Math.floor (arr.length/2);
  //cutting list in half
  let left = arr[0, mid]
  let right = arr[mid, arr.length]
  return Merge(Mergesort(left,compare)
    (Mergesort(right,compare), compare)
}
function Merge(left, right, compare)
let result=[];
while ( left.length || right.length){
if (!left.length){
  result.push(right.shift())
  continue;
}
if (!right.length){
  result.push(left.shift());
  continue;
}
if (compare(left[0],right[0])){
  result.push(left.shift());
} else {
  result.push(right.shift());
}

return result.concat(left).concat(right);
}
module.exports  = mergeSort;
