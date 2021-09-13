function arrayLength(arr) {
    let i;
    for(i = 0; i < arr.length; i++){}
    return i;
}
function arraySum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}
function arrayMulti(arr) {
    let multi = 1;
    for(let i = 0; i < arr.length; i++){
        multi*=arr[i];
    }
    return multi;
}

const arr = [1,7,3,0,-5,7,3,9];

// for(let i = 0; i < arr.length; i++)
//     console.log(arr[i]);

console.log(arr.toString());

console.log('length is: ',arrayLength(arr));
console.log('sum is: ',arraySum(arr));
console.log('multi is: ',arrayMulti(arr));