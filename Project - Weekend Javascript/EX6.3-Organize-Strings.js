function longest(str1,str2){
    if(str1 === str2)
        return str1;
    let tempStr = str1 + str2;
    let tempArr = tempStr.split('');
    tempArr.sort() //sort in place

    let alphabetObj = {};
    tempArr.forEach(element => {
        if(!(`${element.toLowerCase()}` in alphabetObj))
            alphabetObj[`${element.toLowerCase()}`] = 1;
    });
    let resStr = '';
    Object.entries(alphabetObj).forEach(([key,value]) => {
        resStr += `${key}`;
    })
    return resStr;
}

let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq";

console.log(longest(a,b));
console.log();
a = "abcdefghijklmnopqrstuvwxyz"
console.log(longest(a,a));
console.log();
a = 'abcde';
b = 'fghijk';
console.log(longest(a,b));
console.log();
a = a.split('').reverse().join('');
b = b.split('').reverse().join('');
console.log(longest(a,b));