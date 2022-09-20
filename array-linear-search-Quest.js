function swapElement(arr, pos1, pos2) {
    let temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;
}

function sortArray (arr, n) {
    for (i=0; i<n-1; i++) {
        if (arr[i] > arr[i+1]) {
            swapElement(arr, i, i+1);
            if(i!=0) {
                for (j=i;j>=0;j--) {
                    if(arr[j]<arr[j-1]) {
                        swapElement(arr, j , j-1)
                    }
                }
            }
        }
    }
    return arr;
}

function calculateMedian(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        document.write("Median Didn't Work for Unequal Array")
    }
    else  if (arr1 == 1) {
        document.write("Median of given Array is:",(Math.floor(arr1[0]+arr2[0])/ 2));
    }
    else {
        let oneArray = [];
        arr1.forEach(ele => oneArray.push(ele));
        arr2.forEach(ele => oneArray.push(ele));
        let n = oneArray.length;
        let sortedArray = sortArray(oneArray , n);
        let median = Math.floor((sortedArray[n/2] + sortedArray[n/2 - 1]) / 2);
        document.write("Median for given Arrays is: ",median)
    }

} 

    let arr1 = [ 1, 12, 15, 26, 38 ];
    let arr2 = [ 2, 13, 17, 30, 45 ];
    calculateMedian(arr1,arr2);