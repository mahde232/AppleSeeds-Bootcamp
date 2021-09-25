//This function is taken AS-IS from EX6.2-Counting-Duplicates
function cntDuplicates(str){
    let tempArr = str.split('');
    let alphabetObj = {};
    tempArr.forEach(element => {
        if(!(`${element.toLowerCase()}` in alphabetObj))
            alphabetObj[`${element.toLowerCase()}`] = 1;
        else
            alphabetObj[`${element.toLowerCase()}`]++;
    });
    let cnt = 0;
    Object.entries(alphabetObj).forEach(([key,value]) => {
        if(value > 1)
        {
            console.log(`${key} repeats ${value} times`);
            cnt++;
        }
    })
    return cnt;
}

function isIsogram(str){
    if(cntDuplicates(str) > 0)
        return false;
    else
        return true;
}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));