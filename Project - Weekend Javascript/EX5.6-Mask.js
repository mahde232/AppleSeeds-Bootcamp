function maskify(str){
    if(str.length >= 4)
        return '#'.repeat(str.length-4) + str.slice(str.length-4,str.length);
    else
        return str;
}

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("1"));
console.log(maskify("12"));
console.log(maskify("123"));
console.log(maskify("1234"));
console.log(maskify("12345"));
console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));