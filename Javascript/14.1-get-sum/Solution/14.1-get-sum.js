function getSum(arr1, arr2) {
    //const sum = 0;
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
    return sum;
}
//getSum([1, 2, 3][5, 66, 23]);
console.log(getSum([1, 2, 3],[5, 66, 23]));

//When calling the function, the input is written without a coma seperator, essentially squishing 2 arrays together.
//sum is initialized as a const, we need to put new values in it.
//there is no return in the function, it never returns a value.