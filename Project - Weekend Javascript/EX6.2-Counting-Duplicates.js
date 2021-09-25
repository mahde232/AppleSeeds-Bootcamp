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

console.log('number of duplicates in `abcde`=',cntDuplicates('abcde'));
console.log('number of duplicates in `aabbcde`=',cntDuplicates('aabbcde'));
console.log('number of duplicates in `aabBcde`=',cntDuplicates('aabBcde'));
console.log('number of duplicates in `indivisibility`=',cntDuplicates('indivisibility'));
console.log('number of duplicates in `Indivisibilities`=',cntDuplicates('Indivisibilities'));
console.log('number of duplicates in `aA11`=',cntDuplicates('aA11'));
console.log('number of duplicates in `ABBA`=',cntDuplicates('ABBA'));