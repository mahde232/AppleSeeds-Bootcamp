function binToDecimal(arr){
    let arrStr = arr.join('');
    return parseInt(arrStr,2);
}

let arr = [0, 0, 0, 1]; //1
console.log(binToDecimal(arr));
arr = [1, 0, 1, 1]; //11
console.log(binToDecimal(arr));
arr = [0, 1, 0, 1]; //5
console.log(binToDecimal(arr));