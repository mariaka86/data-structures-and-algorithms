function Mergesort(arr)
let n = arr.length{
  if (n < 1){
  mid = n / 2
  let left = arr[0, mid]
  let right = arr[mid, n]
  return merge(Mergesort(left), MergeSort(arr)
    (Mergesort(right), MergeSort(arr)
    ))
  }
}

Mergesort([8, 3, 5, 4, 7, 6, 1, 2])

function Merge(left, right, arr)
let i = 0
let j = 0
let k = 0
while i < left.length && j < right.length
if (left[i] <= right[j]
arr[k] = left[i]
i = i + 1) {
}else {
  arr[k] = right[j]
  j = j + 1
  k = k + 1
}
if i = left.length
left.length = right
else
  left.length = left
