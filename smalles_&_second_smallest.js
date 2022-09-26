// function find_number(arr, n) {
//     arr.sort();
//     let s_small_number
//     if (arr[0] === arr[1]){
//        s_small_number = arr[2]
//     }
//     let result = {
//         small_number: arr[0],
//         s_small_number: s_small_number
//     }
//     return result
// }
// function find_number(arr, n) {
//     arr.sort();
//     let small_number = Number.MAX_VALUE;
//     let s_small_number = Number.MAX_VALUE;
//     for (i = 0; i< n-1 ; i++) {
//         if( arr[i] < small_number) {
//             small_number = arr[i];
//         }
//     }
//     for (i = 0; i< n-1 ; i++) {
//         if( arr[i] > small_number && arr[i] < s_small_number) {
//             s_small_number = arr[i];
//         }
//     }

//     let result = {
//         small_number: arr[0],
//         s_small_number: s_small_number
//     }
//     return result
// }
function find_number(arr, n) {
    arr.sort();
    let small_number = Number.MAX_VALUE;
    let s_small_number = Number.MAX_VALUE;
    for (i = 0; i< n-1 ; i++) {
        if (arr[i] < small_number)
        {
            s_small_number = small_number;
            small_number = arr[i];
        }
        else if (arr[i] < s_small_number && arr[i] != small_number)
            s_small_number = arr[i];
    }
    let result = {
        small_number: small_number,
        s_small_number: s_small_number
    }
    return result
}

let arr = [12, 13, 1, 10, 34, 1]
let n = arr.length
let result = find_number(arr, n)
document.write('Smallest Number is: '+result.small_number+'<br>');
document.write('Second Smallest Number is: '+result.s_small_number+'<br>');