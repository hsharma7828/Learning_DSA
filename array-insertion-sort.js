function swapArray (arr, initial, final) {
        let temp = arr[initial];
        arr[initial] = arr[final];
        arr[final] = temp;
        return arr;
    }

const insertionSort = (arr, n) => {
    for(i=0;i<n;i++) {
        if (arr[i] > arr[i+1]) {
            swapArray(arr, i, i+1);
            if (i !== 0 && arr[i] < arr[i-1]) {
                for (j = i; j>0; j--) {
                    if (arr[j] < arr[j-1]){
                        swapArray(arr,j,j-1);
                    }
                }
            }
        }
    }
    return arr;
}

// var arr = [64, 34, 25, 12, 22, 11, 90 ]
var arr = [64, 1, 4,5,25, 2, 8, 12, 32,22, 11];
let result = insertionSort(arr, arr.length);

result.forEach(ele => {
    document.write(ele + " ");
    document.write(" <br>");
});