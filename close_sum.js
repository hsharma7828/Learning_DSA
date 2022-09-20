function getCloser(arr, n) {
    let f_number;
    let s_number;
    let sum1;
    let sum;
    debugger;
    for (i=0; i<n-1; i++) {
        sum1 = arr[i] + arr[i+1]
        if(i=0) {
            sum = sum1;
            f_number = arr[i];
            s_number = arr[i+1];
        } else if (sum > sum1) {
            sum = sum1;
            f_number = arr[i];
            s_number = arr[i+1];
        }
    }
    return (sum,f_number,s_number);
}

arr = [1, 60, -10, 70, -80, 85];
let result = getCloser(arr, arr.length);
document.write('Minimun Sum near to Zero is: <br>',result.sum);
document.write('First Number is: <br>',result.f_number);
document.write('Second Number is: <br>',result.s_number);