function centuryFromYear(num) {
    if(num % 10 == 0)
        return num/100;
    else
        return Math.floor((num/100)+1);
}

console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(900));
console.log(centuryFromYear(501));