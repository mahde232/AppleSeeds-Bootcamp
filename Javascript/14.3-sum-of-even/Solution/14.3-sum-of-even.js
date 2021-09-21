function getSumOfEven(arr) {
    //return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];

}

console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//first of all, index always starts from 0, so arr[2] is the 3rd slot not the 2nd.
//second of all, at the end, arr[10] is out of bounds, therefore it will give us an error.
//third of all, we are sum'ing using hardcoded indices, if we want it to be dynamic, we use a loop.