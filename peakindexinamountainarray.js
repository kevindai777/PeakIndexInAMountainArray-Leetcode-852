//Objective is to find the peak index in a mountain array.
//Let's call an array A a mountain if the following properties hold:
//A.length >= 3
//There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
//Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

let nums = [0,2,1,0]


//O(logn) solution that uses a binary search to find the index.

let low = 0
let high = nums.length - 1

while (low < high) {
    let mid = Math.floor((low + high) / 2)

    if (nums[mid] > nums[mid + 1]) {
        high = mid
    } else {
        low = mid + 1
    }
}

return low