function abbreviate(str) {
    let tempArr = str.split(' ');
    return tempArr[0][0].toUpperCase() + '.' + tempArr[1][0].toUpperCase();
}

console.log(abbreviate('Sam Harris'));
console.log(abbreviate('Patrick Feeney'));