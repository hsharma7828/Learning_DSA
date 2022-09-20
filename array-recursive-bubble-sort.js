const bubbleSort = (arr, n) => {
    if(n == 1)
    return

    let count = 0;
    for (i = 0; i< n-1; i++) {
        if(arr[i] > arr[i+1]) {
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            count++;
        }
        if (count == 0)
        return;
        bubbleSort(arr, n-1);
    }
    return arr;
}

var arr = [64, 34, 25, 12, 22, 11, 90 ]
let result = bubbleSort(arr, arr.length);

result.forEach(ele => {
    document.write(ele + " ");
    document.write(" <br>");
});