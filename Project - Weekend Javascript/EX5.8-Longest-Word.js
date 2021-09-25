function longest(str){
    let tempArr = str.split(' ');
    let maxLength = -1;
    let maxIndex = -1;
    for(let i = 0; i < tempArr.length; i++){
        if (tempArr[i].length > maxLength)
        {
            maxLength=tempArr[i].length;
            maxIndex = i;
        }
    }
    console.log(tempArr[maxIndex]);
    return maxLength;
}

console.log(longest('Account Passive Income My Potato Assessment'));
console.log(longest('word wrd am I a am'));