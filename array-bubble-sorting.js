// function swapArray (arr, initial, final) {
//     let temp = arr[initial];
//     arr[initial] = arr[final];
//     arr[final] = temp;
//     return arr;
// }

// function printArray (arr) {
//     let n = arr.length;
//     for (i = 0; i< n - 1; i++) {
//         let initial = i;
//         for (j=i+1; j< n-1; j++) {
//             if (arr[i] > arr [j]) {
//                 swapArray(arr, i , j);
//                 i+=1;
//                 if (i == arr.length - 2) {
//                     i = initial;
//                     break;
//                 }
//             }
//             else {
//                 i = initial;
//                 continue;
//             }
//         }
//     }
//     arr.forEach(ele => {
//         document.write(ele + " ");
//         document.write(" <br>");
//     })
// }
// // let arr = [64, 1, 4,5,25, 2, 8, 12, 22, 11];
let arr = [64, 1, 4,5,25, 2, 8, 12, 32,22, 11];
// // let arr = [5, 1, 4, 2, 8];
// document.write("Sorted array: <br>");
// printArray(arr);

function bubbleSort(arr, n)
    {
        var i, j, temp;
        var swapped;
        for (i = 0; i < n - 1; i++)
        {
            swapped = false;
            for (j = 0; j < n - i - 1; j++)
            {
                if (arr[j] > arr[j + 1])
                {
                    // swap arr[j] and arr[j+1]
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
 
            // IF no two elements were
            // swapped by inner loop, then break
            if (swapped == false)
                break;
        }
    }
 
    // Function to print an array
    function printArray(arr, size)
    {
        var i;
        for (i = 0; i < size; i++)
            document.write(arr[i] + " ");
        document.writeln();
    }
 
    // Driver program
        // var arr = [ 64, 34, 25, 12, 22, 11, 90 ];
        var n = arr.length;
        bubbleSort(arr, n);
        document.write("Sorted array: ");
        printArray(arr, n);