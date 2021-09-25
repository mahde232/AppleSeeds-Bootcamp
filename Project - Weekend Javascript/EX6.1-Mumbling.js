function accum(str){
    let tempArr = str.split('');
    let resStr = '';
    for(let i = 0; i < tempArr.length; i++)
    {
        resStr += tempArr[i].toUpperCase() + tempArr[i].toLowerCase().repeat(i)+'-';
    }
    return resStr.slice(0,resStr.length-1);
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));