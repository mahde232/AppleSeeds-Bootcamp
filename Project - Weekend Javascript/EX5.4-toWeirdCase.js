function toWeirdCase(str) {
    let resStr = '';
    let splitStr = str.split(' ');
    splitStr.forEach(element => { //go over the arr containing all words
        for(let i = 0; i < element.length; i++) //go over each word.
        {
            if(i % 2 == 0)
            resStr += element.charAt(i).toUpperCase();
            else
            resStr += element.charAt(i).toLowerCase();
        }
        resStr += ' '; //space between words
    });

    return resStr.trim();
}

console.log(toWeirdCase('Weird string case'));
console.log(toWeirdCase('String'));
console.log(toWeirdCase('my NAME is POTATO man'));