function countWordLengths(arr) {
    let i = 0;
    let lengthArr = [];
    while(i < arr.length)
    {
        lengthArr.push(arr[i].length);
        i++;
    }
    return lengthArr;
}

console.log(countWordLengths(["boo", "doooo", "hoo","ro"]));

//FOR loop is more intuitive because we have a fixed size array, WHILE loop is used more for unpredictable lengths / infinite data.