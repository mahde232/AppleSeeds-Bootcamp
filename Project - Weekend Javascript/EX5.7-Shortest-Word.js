function shortest(str){
    let tempArr = str.split(' ');
    let minLength = Infinity;
    let minIndex = -1;
    for(let i = 0; i < tempArr.length; i++){
        if (tempArr[i].length < minLength)
        {
            minLength=tempArr[i].length;
            minIndex = i;
        }
    }
    console.log(tempArr[minIndex]);
    return minLength;
}

console.log(shortest('Account Passive Income My Potato Assessment'));
console.log(shortest('word wrd am I a am'));