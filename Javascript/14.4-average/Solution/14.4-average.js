function calcAverage(arr) {
    //var sum;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    //return sum;
    return sum/arr.length;
}
console.log(calcAverage([85, 90, 92]));

//first bug is not initializing sum, so in line 4, we are sum'ing: bug + arr[0] = bug.
//second of all, the logic is flawed, this is summing only, it isn't dividing the sum by the amount of numbers.
