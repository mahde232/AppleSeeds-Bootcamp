function lengthOfEachWord(array) {
    let arrOfLengths = [];
    array.forEach(element => {
        arrOfLengths.push(element.length);
    });
    return arrOfLengths;
}

let test = ["boo", "doooo", "hoo", "ro"];
console.log(lengthOfEachWord(test));