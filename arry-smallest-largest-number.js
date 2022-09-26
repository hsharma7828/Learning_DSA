function findNumbers (arr, n) {
let smallestNumber = Number.MAX_VALUE;
let largestNumber = Number.MIN_VALUE; ;
// arr.sort();
for (i = 0;i< n; i++) {
    if(arr[i] < smallestNumber) {
        smallestNumber = arr[i];
    }
    if (largestNumber < arr[i] && arr[i] != smallestNumber) {
        largestNumber = arr [i];
    }
}
let result = {
    smallestNumber : smallestNumber,
    largestNumber : largestNumber
}
return result
}

// let arr = [12, 13, 1, 10, 34, 1]
let arr = [ 1000, 11, 445, 1, 330, 3000 ]
let n = arr.length
let result = findNumbers(arr, n)
document.write('Smallest Number is: '+result.smallestNumber+'<br>');
document.write('Largest Number is: '+result.largestNumber+'<br>');