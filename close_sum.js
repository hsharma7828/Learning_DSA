function getCloser(arr, n) {
    let f_number;
    let s_number;
    let sum1;
    let sum;
    for (i=0; i<n-1; i++) {
        sum1 = arr[i] + arr[i+1]
        if(i==0) {
            sum = sum1;
            f_number = arr[i];
            s_number = arr[i+1];
        } else if (Math.abs(sum) > Math.abs(sum1)) {
            sum = sum1;
            f_number = arr[i];
            s_number = arr[i+1];
        }
    }
    let result= {
        sum:sum,
        f_number:f_number,
        s_number:s_number
    }
    return result;
}

arr = [1, 60, -10, 70, -80, 85];
let result = getCloser(arr, arr.length);
document.write('Minimun Sum near to Zero is: '+result.sum+'<br>');
document.write('First Number is: '+result.f_number+'<br>');
document.write('Second Number is: '+result.s_number+'<br>');