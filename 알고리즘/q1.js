/* =======================================================================
1. Write a function call same, which accepts two arrays.
The Function should return true if every valeu in the array has its corresponding value squared in the second array
The Frequency of values must the same
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1])
=======================================================================*/
const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;

    const freqArr1 = {};
    const freqArr2 = {};

    for (let num of arr1) freqArr1[num] = (freqArr1[num] || 0) + 1;
    for (let num of arr2) freqArr2[num] = (freqArr2[num] || 0) + 1;

    for (let key in freqArr1) {
        if (!freqArr2[key ** 2]) {
            return false;
        }

        if (freqArr1[key] !== freqArr2[key ** 2]) {
            return false;
        }
    }
    return true;
};
// [Frequency Counter]
// console.log(same([1, 2, 3], [4, 1, 9])); // true
// console.log(same([1, 2, 3], [1, 9])); // false
// console.log(same([1, 2, 1], [4, 4, 1])); // false
/* =======================================================================
2.. Given two strings, whrite a function to determine if the second stirng is an anagram of the first
An anagram is a word, phase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('rat', 'cat') // false
validAnagram('qwerty', 'qeywrt') // true
=======================================================================*/
const validAnagram = (text1, text2) => {
    if (text1.length !== text2.length) return false;
    const freqText1 = {};
    const freqText2 = {};

    for (let val of text1) freqText1[val] = (freqText1[val] || 0) + 1;
    for (let val of text2) freqText2[val] = (freqText2[val] || 0) + 1;

    for (let key in freqText1) {
        if (!freqText2[key]) return false;
        if (freqText1[key] !== freqText2[key]) {
            return false;
        }
    }
    return true;
};
// [Frequency Counter]
// console.log(validAnagram("", "")); // true
// console.log(validAnagram("aaz", "zza")); // false
// console.log(validAnagram("rat", "cat")); // false
// console.log(validAnagram("qwerty", "qeywrt")); // true

/* =======================================================================
3. Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located.
If the value is not found, return -1

search([1,2,3,4,5,6], 4) // 3
search([1,2,3,4,5,6], 6) // 5
search([1,2,3,4,5,6], 11) // -1
=======================================================================*/
function search(arr, num) {
    if (arr.length === 1) return 0;

    let minIdx = 0;
    let maxIdx = arr.length - 1;
    let midIdx;

    while (minIdx <= maxIdx) {
        midIdx = Math.floor((minIdx + maxIdx) / 2);
        if (arr[midIdx] === num) {
            return midIdx;
        } else if (arr[midIdx] < num) {
            minIdx += 1;
        } else {
            maxIdx -= 1;
        }
    }
    return -1;
}
//바이너리 서치
// console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
// console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
// console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1

/* =======================================================================
4. Write function called sumZero which accepts a sorted array of integers.
The function sould find the first pair where the sum is 0.
Return an array that includes both values that sum to zero or undefined if a pair does not exist

sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, -3]
sumZero([-2, 0, 1, 3]) // undefined
sumZero([1, 2, 3]) // undefined
=======================================================================*/
const sumZero = (array) => {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let sum = array[left] + array[right];
        if (sum === 0) {
            return [array[left], array[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
};

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, -3]
// console.log(sumZero([-2, 0, 1, 3])); // undefined
// console.log(sumZero([1, 2, 3])); // undefined
/* =======================================================================
5. Implement a function called countUniqueValues,
which accepts a sorted array, and counts the unique valeus in the array
There can be negative numbers in the array, but it will always be sorted
    
countUniqueValues([1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([-2,-1,-1,0,1]) // 4
countUniqueValues([]) // 0
=======================================================================*/

function countUniqueValues(arr) {
    if (arr.length < 2) return arr.length;

    var point = 0;
    for (let i = 1, len = arr.length; i < len; i++) {
        if (arr[point] !== arr[i]) {
            point++;
            arr[point] = arr[i];
        }
    }
    return point + 1;
}

// console.log(countUniqueValues([1, 1, 1, 1, 2])); // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
// console.log(countUniqueValues([])); // 0

/* =======================================================================
6. Write a function called averagePair.
Given a sorted arry of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.
There may be more than one pair that matches the average target

averagePair([1,2,3], 2.5) // true
averagePair([1,3,3,5,6,7,10,12,19], 8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([], 4) // false
=======================================================================*/
function averagePair(arr, avg) {
    let start = 0;
    let end = arr.length - 1;

    let tempAvg;
    while (state < end) {
        tempAvg = (arr[start] + arr[end]) / 2;

        if (tempAvg === avg) return true;
        else if (tempAvg < avg) start++;
        else end--;
    }
    return false;
}

/* =======================================================================
7. Write a function called maxSubarraySum which accepts an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive elements in the array

maxSubarraySum([1,2,5,2,8,1,5], 2) //10
maxSubarraySum([1,2,5,2,8,1,5], 4) // 17
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([4,2,1,6], 1) // 6
maxSubarraySum([], 4) // null
=======================================================================*/

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
// console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
// console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
// console.log(maxSubarraySum([], 4)); // null

function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    //console.log(maxSum);
    tempSum = maxSum;
    for (let i = num, len = arr.length; i < len; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];

        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

//console.log(maxSubarraySum([100, 200, 300, 400], 2));
//console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
//console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
//console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
//console.log(maxSubarraySum([2, 3], 2));

// let a = 12;
// let b = a;
// b = "1";
// console.log(a);
// console.log(b);

function minSubArrayLen(arr, num) {
    let sorted = arr.sort((a, b) => a - b);
    let p = arr.length - 1;
    let maxSum = sorted[p];
    while (p >= 0) {
        if (maxSum >= num) return arr.length - p;
        else {
            p -= 1;
            maxSum += arr[p];
        }
    }
    return 0;
}

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
