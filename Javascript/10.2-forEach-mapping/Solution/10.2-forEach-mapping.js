function doubleValuesforEach(arr) {
    let tempArr= [];
    arr.forEach(element => {
        tempArr.push(element*2);
    });
    return tempArr;
}
function doubleValuesMap(arr) {
    return arr.map((num) => num * 2);
}
function onlyEvenValuesforEach(arr) {
    let tempArr= [];
    arr.forEach(element => {
        if(element % 2 === 0)
        tempArr.push(element);
    });
    return tempArr;
}
function showFirstAndLastforEach(arr) {
    let tempArr= [];
    arr.forEach((element) => {
        if(typeof element == 'string')
            tempArr.push(element);
    });
    return [tempArr[0],tempArr[tempArr.length-1]]; //take first and last.
}
function vowelCountforEach(str) {
    str = str.toLowerCase();
    let vowelsObj = {}
    str.split('').forEach((char) => {
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
        {    
            if(!(char in vowelsObj))
                vowelsObj[char] = 1;
            else
                vowelsObj[char]++;
        }
    })
    return vowelsObj;
}
function capitalizeMap(str) {
    return str.split('').map((char) => {
        return char.toUpperCase();
    }).join('');
}
function shiftLettersMap(str) {
    return str.split('').map((char) => {
        return String.fromCharCode(char.charCodeAt(0)-1);
    }).join('');
}
function swapCaseMap(str) {
    return str.split(' ').map((word,index) => {
        if(index % 2 == 0)
            return capitalizeMap(word);
        else
            return word;
    }).join(' ');
}

let numbers = [1,2,3,4,5,6];
let mixed = [1,'2','3',4,'5',6];
let word = 'eeiiioooouuuuu';
let sentence = "I eat bananas every day";
//console.log(doubleValuesforEach(numbers));
console.log(doubleValuesMap(numbers));
console.log();
console.log(onlyEvenValuesforEach(numbers));
console.log();
console.log(showFirstAndLastforEach(mixed));
console.log();
console.log(vowelCountforEach(word));
console.log();
console.log('before: ',word);
console.log('after: ',capitalizeMap(word));
console.log();
console.log(shiftLettersMap(word));
console.log();
console.log(swapCaseMap(sentence));