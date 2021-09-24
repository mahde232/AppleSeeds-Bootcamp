function repeat_str(str,n){
    let temp = '';
    for(let i = 0; i < n; i++)
        temp+= str;
    return temp;
}
console.log(repeat_str('Hello',3));
console.log(repeat_str('I',6));